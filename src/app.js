import React from 'react';
import HomePage from './homePageTemplate/HomePage';
import ArtistDetal from './artistDetalTemplate/ArtistDetal';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => (
    <Router>
        <div className="content_page"> 
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/artist/:artistId" component={ArtistDetal}/>
            </Switch>
        </div>
    </Router>
)



export default App;