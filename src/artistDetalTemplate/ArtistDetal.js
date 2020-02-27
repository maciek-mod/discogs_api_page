import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/detailPage/actions/detailPage';
import ArtistDetalDescriptionImg from './artistDetalDescriptionImg';
import ArtistDetalReleases from './ArtistDetalReleases';
import Pagination from '../common/pagination';

class ArtistDetal extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.artistId;
        this.props.getDetailPageStart(id);
        this.props.getListReleasesStart(id);
    }

    render() {
        return(
            <section className="artist_page">
                <ArtistDetalDescriptionImg 
                    artistDescription={this.props.detailPageStore.data.profile}
                    artistImages={this.props.detailPageStore.data.images}
                />
                <ArtistDetalReleases 
                    artistReleases={this.props.detailPageStore.relases}
                />
                <Pagination 
                    dataPagination = {this.props.detailPageStore.relases}
                    getArtistList = {this.props.getListReleasesStart.bind(this)}
                />
            </section>
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
        getDetailPageStart: (id) => dispatch(actions.getDetailPageStart(id)),
        getListReleasesStart: (id, urlRequest) => dispatch(actions.getListReleasesStart(id, urlRequest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetal);

