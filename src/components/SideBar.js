import React from 'react'
import { NavLink } from 'react-router-dom'
function SideBar() {

    return (
        <div>
            <NavLink to='/'>Proteins</NavLink>
            <NavLink to='/'>Pretein Bars</NavLink>
            <NavLink to='/'>Creatin</NavLink>
            <NavLink to='/'>Vitamins</NavLink>
        </div>
    )
}

export default SideBar;