// before react fragments we would wrap the lower components with an <Aux> tag in order to have these tags displayed next to eachother.
import { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/sideDrawer/SideDrawer';

class layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerOpenHandler = () => {
		this.setState(prevState => {
			return {
				showSideDrawer: !prevState.showSideDrawer,
			};
		});
	};

	render() {
		return (
			<>
				<Toolbar openSideBar={this.sideDrawerOpenHandler} />
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
