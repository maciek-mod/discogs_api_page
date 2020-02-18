import React from 'react';
import {NavLink} from 'react-router-dom';
import stickyMenu from '../common/helpers'


class Menu extends React.Component {

    componentDidMount() {
        window.onscroll = stickyMenu;
    }

    render() {
        return(
            <header className="menu_container fhd_container">
                <div className="hd_container menu_wrapper">
                    <h1 className="menu_logo_app">Discogs API</h1>
                    <ul className="menu_ul_wrapper">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
};

export default Menu;
