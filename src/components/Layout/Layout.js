// before react fragments we would wrap the lower components with an <Aux> tag in order to have these tags displayed next to eachother.
import { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/sideDrawer/SideDrawer';

class layout extends Component {
	state = {
		showSideDrawer: true,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		return (
			<>
				<Toolbar />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</>
		);
	}
}

export default layout;
