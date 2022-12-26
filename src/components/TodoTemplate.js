import React from 'react'
import classes from './TodoTemplate.module.css'

function  TodoTemplate(props) {
  return (
    <div className={classes.TodoTemplate}>
    {props.children}
    </div>
  )
}

export default TodoTemplate