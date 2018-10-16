import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialize, selectNewRelease, changeSubView } from '../state/home/operations';
import NewReleases from '../components/NewReleasesView';
import SubNav from '../components/SubNav';
import SubViewWrapper from '../components/SubViewWrapper';

class Home extends Component {
	constructor( props ) {
		super( props );
		if(!props.newReleases)
			props.initialize();
	}

	render() {

		const { view, newReleases, changeSubView, selectNewRelease } = this.props;

		const subViews = { 
			"new-releases": {
				component: <NewReleases newReleases={ newReleases } onItemSelect={ selectNewRelease } />,
				display: "NEW RELEASES"
			}
		};

		return (
			<div>
				<SubViewWrapper> 
					<SubNav subViews={ subViews } view={ view } changeView={ changeSubView } />
					{ subViews[view].component }
				</SubViewWrapper>
			</div>		
		);
	}
}

function mapStateToProps( state ) {

	const { newReleases: {items: newReleases}, home: { view }} = state;
	
	return {
		newReleases,
		view
	};
}

function mapDispatchToProps( dispatch ) {
	return {
		"initialize": () => dispatch( initialize() ),
		"selectNewRelease": ( artistId ) => dispatch( selectNewRelease( artistId ) ),
		"changeSubView": ( view ) => dispatch( changeSubView( view ) )
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );

