import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import CollapseButton from './CollapseButton';
import Routes from '../routes';

export default class App extends Component {
	constructor( props ) {
		super( props );
		this.setBackgroundImage = this.setBackgroundImage.bind(this);
		this.toggleSideBar = this.toggleSideBar.bind(this);
		this.bg = React.createRef();
		this.state = { "showSideBar": true, "backgroundImage": null };
	}

	setBackgroundImage( url ) {
		this.setState( ( prevState ) => {
			return { "backgroundImage": url };
		} ); 
	}

	toggleSideBar( active ) {
		this.setState( ( prevState ) => { return { "showSideBar": active } } );
	}

	render() {
		
		const { showSideBar, backgroundImage } = this.state;
		const bg = window.location.pathname === "/artist" ? "linear-gradient(180deg, rgba(0,0,0,.2) 10%, rgba(15,15,15,1) 60%), url(" + backgroundImage + ")" : "none";
		const routeConfig = {
			"/artist": {
				setBackgroundImage: this.setBackgroundImage
			} 
		};

		return (
			<div ref={ this.bg } id="bg" style={ {backgroundImage: bg} }>
				
				<SideBar showArtistLink={ backgroundImage } visible={ showSideBar } toggle={ this.toggleSideBar } />

				<div id="content" className={ showSideBar ? "" : "active" }>
					<CollapseButton toggle={ this.toggleSideBar } />
					<Switch>
						{
							Routes.map((route, index) => (
								<Route
									exact={ route.exact }
									key={ index }
									path={ route.path }
									render={ ( props ) => <route.component { ...props } { ...routeConfig[route.path] } /> } 
								/>
									))
						}
						<Route render={ ( props ) => <Redirect to={{ pathname: "/" }} />} />
					</Switch>
		        </div>

		        <div className="overlay" />
	    	</div>
		)
	}
}