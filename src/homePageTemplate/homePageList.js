import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HomePageList = (props) => (
	props.artistList ? (
		<ul>
			{
				props.artistList.results.map( item =>
					<li key={item.id}>
						<Link to={"/artist/" + item.id}>
							{item.thumb ? <img src={item.thumb} alt="photo" /> : <img src="https://dummyimage.com/150x150/000/fff" alt="photo" />}
							<h2>{item.title}</h2>
						</Link>
					</li>
				)
			}
		</ul>
	) : "Enter artist" );

HomePageList.propTypes = { 
	artistList: PropTypes.object
};

export default HomePageList;