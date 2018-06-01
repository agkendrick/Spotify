import React, { Component } from 'react';
import NewRelease from './NewRelease';

export default class NewReleases extends Component {
	constructor( props ) {
		super( props )
	}

	render() {

		const onClick = this.props.onClick;
		const items = this.props.data === null ? null : this.props.data.map( ( info ) => 
		{
			return <NewRelease key={ info.id } data={ info } onClick={ onClick } />
		});
		
		return (
			<div id="new-releases">
				<h1>New albums & singles</h1>
				{ items }
			</div>
		);
	}
}