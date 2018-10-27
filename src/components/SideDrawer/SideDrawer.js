import React from 'react';
import { NavLink } from 'react-router-dom'
import './SideDrawer.scss';


//functional/stateless component
const SideDrawer = props => {

    let drawerClasses = ['side-drawer'];
    //if show = true
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }

    return (
        <nav className={drawerClasses}>
            <ul className="">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todoList">TodoList</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
};



export default SideDrawer   