import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
const Navbar = () => {
    return (<nav className={classes.nav}>
        <div>
            <div className={classes.item}><NavLink 
                to='/heroes' activeClassName={classes.activeLink}>Heroes</NavLink></div>
            <div className={classes.item}><NavLink
                to='/name' activeClassName={classes.activeLink}>Name</NavLink></div>
            <div className={classes.item}><NavLink
                to='/image' activeClassName={classes.activeLink}>Image</NavLink></div>
            <div className={classes.item}><NavLink
                to='/power' activeClassName={classes.activeLink}>Power</NavLink></div>
            <div className={classes.item}><NavLink
                to='/skill' activeClassName={classes.activeLink}>Skill</NavLink></div>
        </div>
    </nav>)
}
export default Navbar;