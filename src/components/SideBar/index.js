import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledSideBar = styled.nav`
	width: 220px;
    position: fixed;
    top: 0;
    left: -220px;
    height: 100vh;
    z-index: 999;
    background: #000000;
    color: #fff;
    transition: all 0.3s;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
	min-height: 100%;
	background-color: ${ props => props.bgColor };

	ul p {
		color: #fff;
		padding: 10px;
	}

	ul li {
		padding: 10px;
		font-size: 1.3em;
		display: block;
		color: #9a9a9a;
	}

	ul li:hover {
		color: #fff;
	}
	
	ul li i {
		margin-right: 3%;
	}

	${ props => props.visible && css`
		left: 0px;
	`}

`;

const SideBarHeader = styled.div`
	font-size: 7em;
`;

const StyledList = styled.ul`
	padding: 20px 0;
    padding-top: 0px;
	border-bottom: .5px solid hsla(0,0%,100%,.6);
	list-style: none;
`;

const DismissButton = styled.div`
	width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    visibility: hidden;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
	transition: all 0.3s;
	
	:hover {
		background: #fff;
		color: #000;
	}

	.glyphicon {
		line-height: 35px;
	}

	@media (max-width: 768px) {
		visibility: visible;
	}
`;

export default class SideBar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {

		const { visible, showArtistLink, toggle } = this.props;

		const windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const bgColor = window.location.pathname === "/artist" && windowWidth > 768 ? "rgba(0,0,0,.5)" : "black";

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

			<StyledSideBar bgColor={ bgColor } visible={ visible }>

	        	<DismissButton onClick={ () => toggle( false ) }>
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </DismissButton>

	            <SideBarHeader>
	                <i className="fa fa-spotify fa-5" aria-hidden="true"></i>
	            </SideBarHeader>

	            <StyledList>
	                { 
						navLinks.map(( navLink, index ) => {
							const { location, icon, exact, display, show } = navLink; 

							return (
								<li key={ index } onClick={ windowWidth > 768 ? null : () => toggle(false) }>
									<NavLink 
										exact={ exact } 
										to={ location } 
										activeStyle={ {color: '#7386D5'} } 
										style={{display: show ? "block" : "none"}}>
										<i className={ "fa fa-" + icon } />
										{ display }
									</NavLink>
								</li>
							)
						}) 
					}
	            </StyledList>
	        </StyledSideBar>
		);
	}
}