import React, { useState, useEffect } from "react";

const DetailTitle = (props) => {
  const openCart = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  return (
    <>
      <div className="row mt-5">
        <div className="mx-auto col-12" style={{ maxWidth: "97%" }}>
          <div className="row">
            <div className="col-6">
              <small className="text-muted text-uppercase">Free Delivery</small>
            </div>
            <div className="col-6"></div>
          </div>

          <h3>{props.name}</h3>
          <div className="row mx-auto">
            <div className="col-6 m-0 p-0">
              <span className="ml-1 text-uppercase badge badge-pill badge-secondary">
                35-45 Minutes
              </span>
              <span className="ml-1 text-uppercase badge badge-pill badge-secondary">
                95 Delancay st
              </span>
              <span className="ml-1 text-uppercase badge badge-pill badge-secondary">
                More Info
              </span>
            </div>
            <div
              className="col-6 m-0 p-0 mr-auto mt-2 mt-lg-0 justify-content-end"
              style={{ marginLeft: "60%" }}
            >
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-uppercase d-button"
                onClick={openCart}
              >
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTitle;
