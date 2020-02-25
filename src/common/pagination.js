import React from "react";

const Pagination = (props) => (
	props.dataPagination ? (
		<ul className="pagination_wrapper">

            {props.dataPagination.pagination.page !== 1 ? 
            (   
                <>
                    <li><a onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.first)}}>first</a></li>
                    <li><a onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.prev)}}>prev</a></li>
                </>
            ): null }

            <li>{props.dataPagination.pagination.page}</li>

            {props.dataPagination.pagination.urls.last ? 
            (   
                <>
                    <li><a onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.next)}}>next</a></li>
                    <li><a onClick={() => {props.getArtistList(null, props.dataPagination.pagination.urls.last)}}>last</a></li>
                </>
            ): null }

		</ul>
    ) : null
);

export default Pagination;
{/* <li><a href="/">1</a></li> */}