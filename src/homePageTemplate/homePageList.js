import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HomePageList = (props) => (
	props.artistList ? (
		<ul className="homePageSearchResultList">
			{
				props.artistList.results.map( item =>
					<li className="homePageSearchResultItem" key={item.id}>
						<Link to={"/artist/" + item.id}>
							{item.thumb ? <img className="img_wrapper" src={item.thumb} alt="photo" /> : <img src="https://dummyimage.com/150x150/000/fff" alt="photo" />}
							<h3 className="homePageSearchResultHeading">{item.title}</h3>
						</Link>
					</li>
				)
			}
		</ul>
	) : <p className="homePageSearchResultParagraf">Enter artist</p> );

HomePageList.propTypes = { 
	artistList: PropTypes.object
};

export default HomePageList;