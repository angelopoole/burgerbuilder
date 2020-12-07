import classes from './DrawerToggle.module.css';

// Hamburger consists of 3 divs that are styled to look like little bars

const drawerToggle = props => (
	<div onClick={props.openSideBar} className={classes.DrawerToggle}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default drawerToggle;
