import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
	// conditionaly attatch css classes
	return (
		<div>
			<Logo />
			<NavigationItems />
		</div>
	);
};

export default sideDrawer;
