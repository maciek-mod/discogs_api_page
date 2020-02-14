import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/homePage/actions/homePage';


class homePage extends React.Component {

    componentDidMount() {
        this.props.getHomePageStart();
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
        getHomePageStart: () => dispatch(actions.getHomePageStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);

