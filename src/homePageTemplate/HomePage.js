import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/homePage/actions/homePage';
import HomePageList from './homePageList';


class homePage extends React.Component {

    getArtistName(event){
        event.preventDefault();
        const artistName = document.getElementById("artist_input").value;
        this.props.getHomePageStart(artistName);
    } 

    render() {
        return (
            <section className="homepage">
                <h2 className="homePpge_heading">Search artist</h2>
                <form className="homepage_form">
                    <input className="homepage_form_input" id="artist_input" type="text" placeholder="artist" />
                    <input className="homepage_form_submit" type="submit" onClick={this.getArtistName.bind(this)} value="Search" />
                </form>
                <div className="homepage_search_result">
                    <HomePageList
                        artistList={this.props.homePageStore.data}
                    />
                </div>
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
        getHomePageStart: (artist) => dispatch(actions.getHomePageStart(artist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);

