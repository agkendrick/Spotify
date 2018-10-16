import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import CollapseButton from './CollapseButton';
import Routes from '../routes';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-size: cover;
	background-position: center;
	height: 100%;
	width: 100%;
	background-image: ${props => props.bg ? `linear-gradient(180deg, rgba(0,0,0,.2) 10%, rgba(15,15,15,1) 60%), url( ${ props.bg } )` : `none` }
`;

const Content = styled.div`
	width: calc(100% - 220px);
	min-height: 100vh;
	transition: all 0.3s;
	position: absolute;
	top: 0;
	right: 0;

	@media(max-width: 768px) {
		width: 100%;
	}
`;

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
		const routeConfig = {
			"/artist": {
				setBackgroundImage: this.setBackgroundImage
			} 
		};

		return (
			<Wrapper ref={ this.bg } bg={ window.location.pathname === "/artist" ? backgroundImage : null }>

				<SideBar showArtistLink={ backgroundImage } visible={ showSideBar } toggle={ this.toggleSideBar } />

				<Content fullScreen={ showSideBar }>
					<CollapseButton toggle={ this.toggleSideBar } show={ !showSideBar } />
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
		        </Content>
				
	    	</Wrapper>
		)
	}
}