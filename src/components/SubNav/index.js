import React, { Component } from 'react';

export default class SubNav extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const { subViews, view, changeSubView } = this.props;

        const navItems = Object.keys(subViews).map((subView, index) => (
			<div className={ "sub-nav " + ( view === subView ? "active" : "" )} onClick={ () => changeSubView( subView ) } key={ index } >{ subViews[subView].display }</div>
        ));
        
        return (
            <React.Fragment>
                { navItems }
            </ React.Fragment>
        )
    }
}