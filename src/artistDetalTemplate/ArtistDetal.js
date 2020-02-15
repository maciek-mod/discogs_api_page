import React from 'react';

class ArtistDetal extends React.Component {

    render() {
        return(
            <>
               {this.props.match.params.artistId}
            </>
        )
    }
};


export default ArtistDetal;

