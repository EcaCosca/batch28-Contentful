import React from 'react'
import {NavLink} from 'react-router-dom'
import GoBack from './GoBack'

function Nav() {
  return (
    <div>
        <NavLink to='/' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Home </NavLink>
        <NavLink to='/alex' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Alex </NavLink>
        <NavLink to='/vanessa' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Vanessa </NavLink>
        <NavLink to='/darshana' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Darshana </NavLink>
        <NavLink to='/jumps' style={({ isActive }) => ({color: isActive ? "green" : "blue"})}> Jumps </NavLink>
        <GoBack />
    </div>
  )
}

export default Nav