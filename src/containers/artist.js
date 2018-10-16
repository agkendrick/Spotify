import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSubView, selectRelatedArtist } from '../state/artist/operations';
import About from '../components/AboutView';
import RelatedArtists from '../components/RelatedArtistsView';
import SubNav from '../components/SubNav';
import styled from 'styled-components';
import SubViewWrapper from '../components/SubViewWrapper';

const ArtistContainer = styled.div`
	color: white;

	h4 {
		font-size: 11px;
		line-height: 16px;
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: .18em;
		padding-top: 50px;
		color: hsla(0,0%,100%,.6);
		display: block;
		text-align: center;
		margin-bottom: 1em;
	}

	h1 {
		font-size: 5vw;
		line-height: 82px;
		letter-spacing: -.005em;
		font-weight: 600;
		margin-top: 0px;
	}

	> div {
		margin-top: 120px;
	}

	h2 {
		font-size: 18px;
		line-height: 24px;
		letter-spacing: .015em;
		font-weight: 600;
		margin-bottom: 1em;
	}
`;

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
			<ArtistContainer>
				<h4>{ Number(followers).toLocaleString() } MONTHLY LISTENERS</h4>
				<h1>{ name }</h1>

				<SubViewWrapper> 
					<SubNav subViews={ subViews } view={ view } changeSubView={ changeSubView } />
					{ loading ? null : subViews[view].component }
				</SubViewWrapper>
			</ArtistContainer>
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