import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const NavItem = styled.div`
    display: inline-block;
    padding: 10px;
    margin: 20px 10px;
    color: #9a9a9a;
    letter-spacing: 1.5px;
    font-weight: 400;
    transition: all 0.3s;

    :hover {
        color: white;
        cursor: pointer;
    }

    ${ props => props.active && css`
        color: white;
        :after {
            content: "";
            display: block;
            margin: 0 auto;
            width: 40px;
            padding-top: 20px;
            border-bottom: 2px solid #7386D5;
        }
    `}
`;

export default class SubNav extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const { subViews, view, changeSubView } = this.props;

        const navItems = Object.keys(subViews).map((subView, index) => (
            <NavItem 
                active={ view === subView } 
                onClick={ () => changeSubView( subView ) } 
                key={ index }>
                { subViews[subView].display }
            </NavItem>
        ));
        
        return (
            <React.Fragment>
                { navItems }
            </ React.Fragment>
        )
    }
}