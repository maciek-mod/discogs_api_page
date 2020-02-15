import React from 'react';
// import {connect} from './node_modules/react-redux';
// import * as actions from '../store/homePage/actions/homePage';


class artistDetal extends React.Component {
    // componentDidMount() { 
    // }

    render() {
        return(
            <>
               {this.props.match.params.artistId}
            </>
        )
    }
};


export default artistDetal;

