import React from 'react';
import PropTypes from 'prop-types';
import {deleteLinkFromText} from '../common/helpers'

const ArtistDetalDescriptionImg = (props) => (
	(
		<>
			<div className="artist_page_text_wrapper">
				{props && props.artistDescription ? 
				<p className="description">{deleteLinkFromText(props.artistDescription)}</p>
				: null}
			</div>
			<div className="artist_page_img_wrapper">
				{props && props.artistImages ?
					props.artistImages.map( (item, key) => (
                        <div key={key} className="img_wrapper"><img src={item.uri} alt="photoArtist" /></div>
					))
				: null }
			</div>
		</>
	)
);

ArtistDetalDescriptionImg.propTypes = { 
	artistDescription: PropTypes.string,
	artistImages: PropTypes.array
};

export default ArtistDetalDescriptionImg;