import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetalReleases = (props) => (
	(
		<>
			<div className="relases_list">
				{props && props.artistReleases ?
					props.artistReleases.map( (item, key) =>
						(
                            // {key}
                            <div className="box_relases" key={key}>
                                {item.thumb ? <img src={item.thumb} alt="photo" /> : <img src="https://dummyimage.com/150x150/000/fff" alt="photo" />}
                                <div className="text_wrapper"> <h2 className="title">{item.artist} - {item.title}</h2> 
                                    <p className="year_relases">Year - {item.year}</p>
                                </div>
                            </div>
                        )
					)
				: null}
			</div>
		</>
	)
);

ArtistDetalReleases.propTypes = { 
	// artistDescription: PropTypes.string,
	// artistImages: PropTypes.array
};

export default ArtistDetalReleases;