import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HomePageList = (props) => (
	props.artistList ? (
		<ul className="homepage_search_result_list">
			{
				props.artistList.results.map( item =>
					<li className="homepage_search_resultItem" key={item.id}>
                        <div className="img_wrapper">
                            <Link to={"/artist/" + item.id}>
                                {item.thumb ? <img src={item.thumb} alt="photo" /> : <img src="https://dummyimage.com/150x150/000/fff" alt="photo" />}
                                <h3 className="homepage_search_result_heading">{item.title}</h3>
                            </Link>
                        </div>
					</li>
				)
			}
		</ul>
	) : <p className="homepage_search_result_paragraf">Enter artist</p> );

HomePageList.propTypes = { 
	artistList: PropTypes.object
};

export default HomePageList;