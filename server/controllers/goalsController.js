const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModels')
const User = require('../models/userModels')

//@desc Get goals
//Route Get /api/goals
//@access private

const getGoals =asyncHandler( async (req,res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@desc set goals
//Route Post /api/goals
//@access private

const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400).json({message: 'please add some input'})
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    
    res.status(200).json(goal)
})

//@desc Get goals
//Route Get /api/goals
//@access private

const updateGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)

        throw new Error ('Goal not found')

        
    }
   
    //check for uer
    if(!req.user){
        res.status(401)
        throw new Error('User not found')

    }
    //make sure the login user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not Authorized')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body, {
        new:true
    })
    res.status(200).json(updatedGoal)
})

//@desc Get goals
//Route Get /api/goals
//@access private

const deleteGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)

        throw new Error ('Goal not found')

        
    }

   
    //check for uer
    if(!req.user){
        res.status(401)
        throw new Error('User not found')

    }
    //make sure the login user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not Authorized')
    }
    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {getGoals,setGoals,deleteGoals,updateGoals,}