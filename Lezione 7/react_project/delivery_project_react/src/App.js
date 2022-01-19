import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCardRow from "./components/HomeCardRow";
import { fetchRestaurants } from "./service/api";
import "./App.scss";
import Spinner from "react-bootstrap/Spinner";
import CartDetail from "./components/CartDetail";
import {Counter} from "./components/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailComponent from "./pages/DetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAsync, fetchHomeProductsAsync, selectCategories, selectHomeProducts} from "./redux/slice/CategoriesSlice";

const App = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const categories =  useSelector(selectCategories);
  const products =  useSelector(selectHomeProducts);
  const [menuItems, setMenuItems] = useState(undefined);

  const dispatchCategories = () => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchHomeProductsAsync());
  };

  useEffect(()=>{
    console.log('categories', categories);
    if(categories) {
      const items = categories.map((c) =>  {
      return {
          value: c,
          href: '#'
      }});
      setMenuItems(items);
    }
  }, [categories]);


  useEffect(() => {
    console.log('products', products);
    if(products){
      const m = products.map((p) => { return {
        id: p.id,
        title: p.title || "",
        link: "./pages/card_detail.html",
        desc: p.description|| "",
        image: p.image,
        price: p.price,
      }});
      const size = 3;
      const result = [];
      for (let i = 0; i < m.length; i += size) {
        result.push(m.slice(i, i + size));
      }
      setItems(result);
    }
  }, [products])

  const handleHomeItems = () => {
    dispatchCategories();
/*     fetchRestaurants().then((response) => {
      const m = response.data.map((r) => {
        return {
          id: r.id,
          title: r.name || "",
          link: "./pages/card_detail.html",
          desc: r.app_infos.about || "",
          image:
            "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
          detail: {
            about: r.app_infos.about || "",
            address: r.app_infos.address || "",
            logo: r.app_infos.logo_url || "",
            name: r.app_infos.name,
            lat: r.app_infos.latitude,
            lon: r.app_infos.longitude,
            website: r.app_infos.website,
          },
        };
      });
      const size = 3;
      const result = [];
      for (let i = 0; i < m.length; i += size) {
        result.push(m.slice(i, i + size));
      }

      console.log(">>>", m);
      setItems(result);
    }); */
  };

  useEffect(() => {
    handleHomeItems();
  }, []);

  return (
    <div>
      <CartDetail></CartDetail>
      <Header detail={false} menuItems={menuItems}></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
            <div
              className="container-fluid mx-auto"
              style={{ maxWidth: "70%" }}
            >
              <div className="row mt-5">
                <div className="mx-auto col-12" style={{ maxWidth: "97%" }}>
                  <h3>Daily fresh products!</h3>
                  <span>Not Lorem Ipsum</span>
                </div>
              </div>
              {items.length <= 0 ? (
                <div class="d-flex justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                items.map((i) => {
                  return <HomeCardRow items={i}></HomeCardRow>;
                })
              )}
            </div>
          </Route>
          <Route path="/detail/:id">
            <DetailComponent />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
