import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SideBar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { visible, showArtistLink, toggle } = this.props;

		const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const bg = window.location.pathname === "/artist" && windowWidth > 768 ? "rgba(0,0,0,.5)" : "black";

		const navLinks = [
			{
				location: "/",
				display: "Home",
				icon: "home",
				exact: true,
				show: true
			},
			{
				location: "/search",
				display: "Search",
				icon: "search",
				show: true
			},
			{
				location: "/artist",
				display: "Artist",
				icon: "music",
				show: showArtistLink
			}
		];

		return (

			<nav id="sidebar" style={ { backgroundColor: bg } } className={ visible ? "active" : "" }>

	        	<div id="dismiss" onClick={ () => toggle( false ) }>
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </div>

	            <div className="sidebar-header">
	                <i className="fa fa-spotify fa-5" aria-hidden="true"></i>
	            </div>

	            <ul className="list-unstyled components">
	                { 
						navLinks.map(( navLink, index ) => {
							const { location, icon, exact, display, show } = navLink; 

							return (
								<li key={ index } onClick={ windowWidth > 768 ? null : () => toggle(false) }>
									<NavLink exact={ exact } to={ location } activeStyle={ {color: '#7386D5'} } style={{display: show ? "block" : "none"}}>
										<i className={ "fa fa-" + icon } />
										{ display }
									</NavLink>
								</li>
							)
						}) 
					}
	            </ul>
	        </nav>
		);
	}
}