import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/homePage/actions/homePage';
import HomePageList from './homePageList';


class homePage extends React.Component {

    componentDidMount() {
        // this.props.getHomePageStart("M.I.K.E");
    }

    getArtistName = (event) => {
        this.props.homePageStore.data = null;
        event.preventDefault();
        const artistName = document.getElementById("artist_input").value;
        this.props.getHomePageStart(artistName);
    }

    render() {
        return(
            <>
                <h2>Search artist</h2>
                <form>
                    <input id="artist_input" type="text" placeholder="artist" />
                    <input type="submit" onClick={this.getArtistName} value="Search"></input>
                </form>
                <HomePageList
                    artistList={this.props.homePageStore.data}
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
        getHomePageStart: (artist) => dispatch(actions.getHomePageStart(artist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);

