import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSubView, selectRelatedArtist } from '../state/artist/operations';
import About from '../components/AboutView';
import RelatedArtists from '../components/RelatedArtistsView';
import SubNav from '../components/SubNav';

class Artist extends Component {
	constructor( props ) {
		super( props );
		if (props.history.action !== 'PUSH' && !props.id ) {
			props.history.push('/');
		}
		this.onItemSelect = this.onItemSelect.bind( this );
		props.changeSubView( "about" );
	}

	onItemSelect( id, name, type ) {
		this.props.selectRelatedArtist( id );
		window.scroll(0, 0);
	}

	componentDidUpdate( prevProps ) {
		const { img, setBackgroundImage } = this.props;
		if( prevProps.img !== img ){
			setBackgroundImage( img );
		}
	}

	render() {

		const { view, changeSubView, id, bio, name, followers, related: { items, loading } } = this.props;
		const subViews = { 
			"about": {
				component: <About bio={ bio } />,
				display: "ABOUT"
			},
			"related-artists": {
				component: <RelatedArtists related={ items } onClick={ this.onItemSelect } id={ id } />,
				display: "RELATED ARTISTS"
			}
		};

		return (
			<div id="artist-view">
				<h4>{ Number(followers).toLocaleString() } MONTHLY LISTENERS</h4>
				<h1>{ name }</h1>

				<div className="view"> 
					<SubNav subViews={ subViews } view={ view } changeSubView={ changeSubView } />
					{ loading ? null : subViews[view].component }
				</div>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	
	const { artist: { loading, view, related, info: { bio, name, followers, img, id} }} = state;

	return {
		loading,
		view,
		related,
		bio: bio,
		name: name,
		followers: followers,
		img: img,
		id: id
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"changeSubView": ( view ) => dispatch( changeSubView( view ) ),
		"selectRelatedArtist": ( artistId ) => dispatch( selectRelatedArtist( artistId ))
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Artist );