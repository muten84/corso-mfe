import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
//export default DetailTitle;

const DetailTitle = (props) => {
  const handleAddToCartWithoutRedux = (p) => {
    let newMessage = new CustomEvent("add-to-cart", {
      detail: { message: JSON.stringify(p) },
    });
    const el = document.getElementById("detailComponent");
    el.dispatchEvent(newMessage);
  };

  /**
   * redux style!!
   * @param {p} p
   */
  const handleAddToCart = (p) => {
    props.addToCart(p);
  };

  return (
    <>
      <div id={"card-" + props.title} className="col-sm-6 col-lg-6 col-md-6">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body p-0 m-0 ">
                <div className="ml-auto">
                  <p className="font-weight-bold card-title mb-1">
                    {props.title}
                  </p>
                </div>
                <p className="card-text mb-1">{props.subtitle}</p>
                <p className="card-text mb-1">
                  <small className="price">{props.price} €</small>
                </p>
                <button
                  className="btn d-button"
                  onClick={() => handleAddToCart(props)}
                >
                  + Add to cart
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://raster-static.postmates.com/?url=https%3A%2F%2Fitems-static.postmates.com%2Fuploads%2Fmedia%2F83821a90-d3a8-593a-9726-e566d3c9471d%2F83821a90-d3a8-593a-9726-e566d3c9471d.jpg%3Fv%3D63779732459&quality=85&w=320&h=0&mode=auto&format=webp&v=4"
                className="card-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//export default DetailTitle;
export default connect(null, { addToCart })(DetailTitle);
