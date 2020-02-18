import React from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends React.Component {

    componentDidMount() {
        function scroll() {
            let height = window.scrollY;
            let menu = document.querySelector("header");
            if (height > 60) {
                menu.classList.add('slide');
            } else {
                menu.classList.remove('slide');
            }
        }
        window.onscroll = scroll;
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
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
};

export default Menu;
