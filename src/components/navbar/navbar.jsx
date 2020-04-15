import React from 'react';
import style from './navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
	return(
		<div className={style.navbar}>
		  <div><NavLink to='/dialogs'>Dialogs</NavLink></div>
		  <div><NavLink to='/profile'>Profile</NavLink></div>
		</div>
	)
};
export default Navbar;
