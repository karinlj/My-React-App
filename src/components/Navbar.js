import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <h3><a className="logo">My React App</a></h3>
            <ul className="links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todoList">TodoList</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar