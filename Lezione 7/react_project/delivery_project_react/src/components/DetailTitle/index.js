
import React, { useState, useEffect } from 'react';

const DetailTitle = (props) => {

    return (
        <>
           <div className="row mt-5">
            <div className="mx-auto col-12" style={{"maxWidth": "97%"}}>
                <small className="text-muted text-uppercase">Free Delivery</small>
                <h3>
                    {props.name}
                </h3>
                <div className="row mx-auto">
                    <span className="ml-1 text-uppercase badge badge-pill badge-secondary">35-45 Minutes</span>
                    <span className="ml-1 text-uppercase badge badge-pill badge-secondary">95 Delancay st</span>
                    <span className="ml-1 text-uppercase badge badge-pill badge-secondary">More Info</span>
                </div>
            </div>
          </div>
        </>
    );
};


export default DetailTitle;