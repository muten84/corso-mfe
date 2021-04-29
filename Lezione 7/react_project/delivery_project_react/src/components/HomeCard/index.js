import React from 'react';
import { Link } from "react-router-dom";

const HomeCard = ({ title, link, image, desc, history }) => {
    console.log(history);
    return (
        <>
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="mx-auto card" >
                    <img className="card-img-top"
                        src={image}
                        alt="Card cap" />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <Link to="/detail">Detail</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCard;