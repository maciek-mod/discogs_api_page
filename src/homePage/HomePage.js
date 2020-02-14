import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/homePage';


class homePage extends React.Component {

    componentDidMount() {
        this.props.getArtist();
    }

    render() {
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
        getArtist: () => dispatch(actions.getArtist())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);

