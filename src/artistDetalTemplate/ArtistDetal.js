import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/detailPage/actions/detailPage';

class ArtistDetal extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.artistId;
        this.props.getDetailPageStart(id);
    }

    render() {
        return(
            <>
               {this.props.match.params.artistId}
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
        getDetailPageStart: (id) => dispatch(actions.getDetailPageStart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetal);

