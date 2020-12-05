import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {
	// conditionaly attatch css classes
	let attatchedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attatchedClasses = [classes.SideDrawer, classes.Open];
	}

	// :( )

	return (
		<>
			<BackDrop show={props.open} clicked={props.closed} />
			<div className={attatchedClasses.join(' ')}>
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
