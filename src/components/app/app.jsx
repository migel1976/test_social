import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dialogs from '../dialogs/dialogs';
import Profile from '../profile/profile';
import style from './app.module.css';


const App =()=>{
	return(
			<div className={style.app}>
				<Header />
				<Navbar />
				<div className={style.app_content}>
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
				</div>
			</div>
	)
};
export default App;
