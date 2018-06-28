import React, { Component } from 'react';

export default class Navigation extends Component {
	constructor( props ) {
		super( props );
		this.onClick = this.onClick.bind(this);
		this.state = { "active": "home" }
		this.list = React.createRef();
		this.home = React.createRef();
		this.search = React.createRef();
		this.artist = React.createRef();
	}
	
	onClick() {
		this.props.toggle( false )
	}

	changeView( view, event ) {
		this.props.setView( view );
		this.list.current.childNodes.forEach( ( child ) => {
			child.className = "link";
		} );
		event.target.className += " active";
	}

	componentDidMount() {
		this[this.props.view].current.className = "link active";
	}
	
	componentDidUpdate(){
		this.list.current.childNodes.forEach((child) => {
			child.className = "link";
		});

		this[this.props.view].current.className = "link active";
	}

	render() {

		const { isNavActive, view, artistLoaded } = this.props;

		const bg = view === "artist" ? "rgba(0,0,0,.5)" : "black"
		const show = artistLoaded ? "block" : "none";

		return (
	        <nav ref={ this.sidebar } id="sidebar" style={ { backgroundColor: bg } } className={ isNavActive ? "active" : "" }>

	        	<div id="dismiss" onClick={ this.onClick }>
	                <i className="glyphicon glyphicon-arrow-left"></i>
	            </div>

	            <div className="sidebar-header">
	                <i className="fa fa-spotify fa-5" aria-hidden="true"></i>
	            </div>

	            <ul ref={ this.list } className="list-unstyled components">
	                <li ref={ this.home } onClick={ ( e ) => { this.changeView( "home", e ) } } className="link"><i className="fa fa-home"/>Home</li>
	                <li ref={ this.search } onClick={ ( e ) => { this.changeView( "search", e ) } } className="link"><i className="fa fa-search"/>Search</li>
					<li ref={ this.artist } style={ {display: show } } onClick={ ( e ) => { this.changeView( "artist", e ) } } className="link"><i className="fa fa-music"/>Artist</li>
	            </ul>
	        </nav>
		);
	}
}