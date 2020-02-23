import React from 'react';
import HomePage from './homePageTemplate/HomePage';
import ArtistDetal from './artistDetalTemplate/ArtistDetal';
import AboutPage from './aboutPage/aboutPage';
import Menu from './common/menu';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <Menu />
        <div className="fhd_container">
            <div className="hd_container"> 
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/artist/:artistId" component={ArtistDetal}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        </div>
    </Router>
)



export default App;