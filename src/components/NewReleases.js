import React, { Component } from 'react';
import NewRelease from './NewRelease';

export default class NewReleases extends Component {
	constructor( props ) {
		super( props )
	}

	render() {

		const onClick = this.props.onClick;

		console.log("data: %o", this.props.data );
		const items = this.props.data === null ? null : this.props.data.map( ( info ) => 
		{
			return <NewRelease key={ info.id } data={ info } onClick={ onClick } />
		});
		console.log( items );
		return (
			<div className="newReleases">
				{ items }
			</div>
		);
	}
}