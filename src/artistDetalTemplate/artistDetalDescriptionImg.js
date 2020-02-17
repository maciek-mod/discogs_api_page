import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetalDescriptionImg = (props) => (
	(
		<>
			<div>
				{props && props.artistDescription ? props.artistDescription : null}
			</div>
			<div>
				{props && props.artistImages ?
					props.artistImages.map( (item, key) =>
                        (
                            <img key={key} src={item.uri} alt="photoArtist" />
                        )
					)
				: null}
			</div>
		</>
	)
);

ArtistDetalDescriptionImg.propTypes = { 
	artistDescription: PropTypes.string,
	artistImages: PropTypes.array
};

export default ArtistDetalDescriptionImg;