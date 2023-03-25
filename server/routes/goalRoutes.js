const express = require('express')
const router = express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalsController')

const {protect} = require('../middleware/authMiddleware')
const { update } = require('../models/userModels')

/*
router.get('/',getGoals)

router.get('/',(req,res)=>{
    res.status(200).json({ message: 'get goalsss'})
})

router.post('/',setGoals)
*/

router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoals)

/*
router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)
*/
module.exports = router
