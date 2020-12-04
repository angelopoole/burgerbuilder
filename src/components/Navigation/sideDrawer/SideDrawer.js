import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {
	// conditionaly attatch css classes
	return (
		<>
			<BackDrop />
			<div className={classes.SideDrawer}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
};

export default sideDrawer;
