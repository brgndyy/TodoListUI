import React from 'react'
import classes from './Header.module.css'
import {MdLightMode} from 'react-icons/md'

function Header() {
  return (
    <div className={classes.header}>
    <MdLightMode className={classes.darkModeBtn}/>
    <div className={classes.todo_Section}>
    <span>All</span>
    <span>Active</span>
    <span>Completed</span>
    </div>
    </div>
  )
}

export default Header