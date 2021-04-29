
import React, { useState, useEffect } from 'react';

const DetailTitle = () => {

    return (
        <>
            <div className="col-sm-6 col-lg-6 col-md-6">
                <div className="card mb-3">
                    <div className="row no-gutters">

                        <div className="col-md-8">
                            <div className="card-body p-0 m-0 ">
                                <div className="ml-auto">
                                    <p className="font-weight-bold card-title mb-1">Card title</p>

                                </div>
                                <p className="card-text mb-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text mb-1"><small className="price">10.99 €</small></p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://raster-static.postmates.com/?url=https%3A%2F%2Fitems-static.postmates.com%2Fuploads%2Fmedia%2F83821a90-d3a8-593a-9726-e566d3c9471d%2F83821a90-d3a8-593a-9726-e566d3c9471d.jpg%3Fv%3D63779732459&quality=85&w=320&h=0&mode=auto&format=webp&v=4" className="card-img" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default DetailTitle;