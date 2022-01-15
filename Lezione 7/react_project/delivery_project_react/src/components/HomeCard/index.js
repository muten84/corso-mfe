import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const HomeCard = ({ title, link, image, desc, id, detail, history }) => {
    console.log(history);
    useEffect(()=>{
        localStorage.setItem(id, JSON.stringify(detail));
    }, [])
    return (
        <>
            <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="mx-auto card" >
                    <img className="card-img-top"
                        src={image}
                        alt="Card cap" />
                    <div className="card-body wrap-ellipsis">
                        <h6 className="card-title wrap-ellipsis">{title}</h6>
                        <Link to={"/detail/"+id}>Detail</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCard;