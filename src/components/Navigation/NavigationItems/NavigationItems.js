import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = props => (
	<ul
		className={classes.NavigationItems}
		style={{ flexDirection: props.flexDirection }}
	>
		<NavigationItem link='/' active>
			Burger Builder
		</NavigationItem>
		<NavigationItem link='/'> Checkout </NavigationItem>
	</ul>
);

export default NavigationItems;
