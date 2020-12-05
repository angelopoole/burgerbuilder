import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
	<header className={classes.Toolbar}>
		<DrawerToggle openSideBar={props.openSideBar} />
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
