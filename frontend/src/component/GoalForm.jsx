import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from'../features/goals/goalSlice'
import React, { Component }  from 'react';
function GoalForm(){
    const [text,setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }
    return(
        <>
        <section className='App'>
        <div className='App'>GoalForm</div>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label htmlFor='text'>Goal</label>
            <input type='text' name='text' id='text' value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className='form-group'>
            <button className="btn btn-block" type='submit'>add goal</button>
        </div>
        </form>
        </section>
        </>
    )
}

export default GoalForm