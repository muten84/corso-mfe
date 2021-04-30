import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchRestaurantCategories } from "../../service/api";

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  //debugger;
  const savedHandler = useRef();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);
      // Add event listener
      element.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

const CartDetail = (props) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const removeProd = (idx) => {
    delete items[idx];
    setItems(items.filter((o) => o !== undefined));
  };

  const handler = useCallback(
    (o) => {
      console.log("callback invoked", o);
      if (!o || !o.detail.message) {
        return;
      }
      const p = JSON.parse(o.detail.message);
      const c = [].concat(items, [p]);
      setItems(c);
    },
    [setItems, items]
  );

  useEffect(() => {
    const el = document.getElementById("detailComponent");
    if (!el) {
      return;
    }
    el.addEventListener("add-to-cart", (o) => {
      console.log("receive event", o);
      /* const p = JSON.parse(o.detail.message);
            const c = [].concat(items, [p])
            setItems(c); */
    });
  }, []);

  useEffect(() => {
    console.log("items chaged", items.length);
    if (!items || items.length <= 0) {
      return;
    }
    const totalPrice = items.reduce((a, b) => {
      return { price: a.price + b.price };
    });
    console.log("price", totalPrice);
    setTotalPrice(totalPrice.price);
  }, [items.length]);

  const el = document.getElementById("detailComponent");
  useEventListener("add-to-cart", handler, el);

  return (
    <>
      <div id="mySidenav" className="d-sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times; {items.length}
        </a>
        <ul>
          {items.map((i, idx) => {
            return (
              <li style={{ color: "white" }}>
                <span>{i.title + " " + i.price + "€"}</span>{" "}
                <span onClick={() => removeProd(idx)}>-</span>
              </li>
            );
          })}
        </ul>
        <span style={{ color: "white" }}>
          Totale: {totalPrice && totalPrice}
        </span>
      </div>
    </>
  );
};

export default CartDetail;
