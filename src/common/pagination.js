import React from "react";
import PropTypes from 'prop-types';


const Pagination = (props) => (
	props.dataPagination.pagination ? (
		<ul className="pagination_wrapper">
            {props.dataPagination.pagination.page !== 1 ? 
            (   
                <>
                    <li onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.first)}}>&#60;&#60;</li>
                    <li onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.prev)}}>&#60;</li>
                </>
            ): null }

            <li>{props.dataPagination.pagination.page}</li>

            {props.dataPagination.pagination.urls.last ? 
            (   
                <>
                    <li onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.next)}}>&#62;</li>
                    <li onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.last)}}>&#62;&#62;</li>
                </>
            ): null }

		</ul>
    ) : null
);

Pagination.propTypes = { 
    dataPagination: PropTypes.object,
    getArtistList: PropTypes.func
};

export default Pagination;