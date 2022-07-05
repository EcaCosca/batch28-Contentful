import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <NavLink to='/' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Home </NavLink>
        <NavLink to='/alex' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Home </NavLink>
        <NavLink to='/vanessa' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Home </NavLink>
        <NavLink to='/darshana' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Home </NavLink>
        <NavLink to='/jumps' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Jumps </NavLink>
    </div>
  )
}

export default Nav