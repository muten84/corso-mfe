import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCardRow from "./components/HomeCardRow";
import { fetchRestaurants } from "./service/api";
import "./App.scss";
import Spinner from "react-bootstrap/Spinner";
import CartDetail from "./components/CartDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailComponent from "./pages/DetailComponent";

const menuItems = [
  {
    value: "Food",
    href: "#",
  },
  {
    value: "Fresh",
    href: "#",
  },
  {
    value: "Drinks",
    href: "#",
  },
  {
    value: "Convenience",
    href: "#",
  },
];

const homeItems = [
  [
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fe22b3b30-272b-4cd2-92d3-2ab4f79ba7da%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F0e8d44fd-42ee-4f55-8142-fc2c9e934944%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fa700d2ec-08da-4e7e-addb-779d86d1a1ba%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
  ],
  [
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F11412514-4003-4b63-af71-ba69fdfdc148%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
    {
      title: "Title",
      link: "./pages/card_detail.html",
      desc: "Description",
      image:
        "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F4b7f26df-966e-49b3-b483-a643816b70ea%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4",
    },
  ],
];

//fetchRestaurants();

const App = () => {
  const [items, setItems] = useState([]);

  const handleHomeItems = () => {
    fetchRestaurants().then((response) => {
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
    });
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
                  <h3>Daily deals</h3>
                  <span>Epic deals from your favourite restaurants</span>
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
