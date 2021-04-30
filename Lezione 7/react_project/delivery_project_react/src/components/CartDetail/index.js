import React, { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions";

/**
 * useful without redux
 * @param {e} eventName
 * @param {*} handler
 * @param {*} element
 */
function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

const CartDetail = (props) => {
  const [items, setItems] = useState(props.items);
  const [totalPrice, setTotalPrice] = useState(0);

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  /**
   * redux style!!
   * @param {idx} idx
   */
  const removeProd = (idx) => {
    props.removeFromCart(idx);
  };

  /**
   * * useful without redux
   */
  const handler = useCallback(
    (o) => {
      console.log("callback invoked", o);
      if (!o || !o.detail.message) {
        return;
      }
      const p = JSON.parse(o.detail.message);
      const c = [].concat(items, [p]);
      //setItems(c);
    },
    [setItems, items]
  );

  /**
   * redux style!
   */
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  /**
   * redux style!!
   */
  useEffect(() => {
    console.log("items chaged", items && items.length);
    if (!items || items.length <= 0) {
      return;
    }
    const totalPrice = items.reduce((a, b) => {
      return { price: a.price + b.price };
    });
    console.log("price", totalPrice);
    setTotalPrice(totalPrice.price);
  }, [items]);

  /**
   * useful without redux!
   */
  const el = document.getElementById("detailComponent");
  useEventListener("add-to-cart", handler, el);

  return (
    <>
      <div id="mySidenav" className="d-sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <ul>
          {items &&
            items.map((i, idx) => {
              return (
                <li>
                  <span
                    className="mr-2 btn btn-outline-danger btn-link"
                    onClick={() => removeProd(idx)}
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </span>
                  <span className="p-0">{i.title + " " + i.price + "€"}</span>{" "}
                </li>
              );
            })}
        </ul>
        <span>Totale: {totalPrice && totalPrice} €</span>
      </div>
    </>
  );
};

/**
 * inject cart state to properties functional component
 * in this case the properties coming from store was the same used by the components
 */
const mapStateToProps = (state) => {
  return state.cart;
};

/**
 * connect the component to state incoming from store and to action incoming from component
 * all state and actions incoming form store are inject in the props of the functional component
 */
export default connect(mapStateToProps, { removeFromCart })(CartDetail);
