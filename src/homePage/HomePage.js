import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/homePage';


class homePage extends React.Component {

    componentDidMount() {
        this.props.getHomePageStart();
    }

    render() {
        console.log(this.props);
        
        return(
            <>
                Home Page
            </>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getArtist: () => dispatch(actions.getArtist())
        getHomePageStart: () => dispatch(actions.getHomePageStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);

