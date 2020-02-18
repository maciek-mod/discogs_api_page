import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetalReleases = (props) => (
	(
		<>
			<div className="artis_page_relases_list">
				{props && props.artistReleases ?
					props.artistReleases.map( (item, key) =>
						(
                            <div className="box_relases img_wrapper" key={key}>
                                {item.thumb ? <img src={item.thumb} alt="photo" /> : <img src="https://dummyimage.com/150x150/000/fff" alt="photo" />}
                                <div className="text_wrapper"> <h3 className="title">{item.artist} - {item.title}</h3> 
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