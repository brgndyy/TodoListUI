import React from 'react'
import classes from './TodoInsert.module.css'

function TodoInsert() {
  return (
    <div className={classes.insert_container}>
    <form className={classes.add_form}>
    <input type={'text'} placeholder ="Add Todo">
    </input>
    <button className={classes.AddBtn}>Add</button>
    </form>
    </div>
  )
}

export default TodoInsert