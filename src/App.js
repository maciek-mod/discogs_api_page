import React from 'react';
import HomePage from './homePage/HomePage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="content_page"> 
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;