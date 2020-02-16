import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/detailPage/actions/detailPage';
import ArtistDetalDescriptionImg from './artistDetalDescriptionImg';


class ArtistDetal extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.artistId;
        this.props.getDetailPageStart(id);
    }

    render() {
        return(
            <>
                <ArtistDetalDescriptionImg 
                    artistDescription={this.props.detailPageStore.data.profile}
                    artistImages={this.props.detailPageStore.data.images}
                />
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

