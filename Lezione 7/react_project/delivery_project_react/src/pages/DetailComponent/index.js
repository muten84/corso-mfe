import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroDetail from "../../components/HeroDetail";
import DetailTitle from "../../components/DetailTitle";
import DetailCardListRow from "../../components/DetailCardListRow";

import "../../App.scss";
import { useParams } from "react-router-dom";
import { fetchRestaurantCategories } from "../../service/api";
import CartDetail from "../../components/CartDetail";

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

const DetailComponent = () => {
  let { id } = useParams();
  const [currentDetail, setCurrentDetail] = useState({});
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
    const source = localStorage.getItem(id);
    const detail = JSON.parse(source);
    setCurrentDetail(detail);
    fetchRestaurantCategories(id).then((response) => {
      //fetch first category and render its itemsd
      const m = response.data[0].byname_products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          subtitle: p.subtitle,
          price: p.reservation_items[0].price,
        };
      });
      const size = 2;
      const result = [];
      for (let i = 0; i < m.length; i += size) {
        result.push(m.slice(i, i + size));
      }
      setDetailItems(result);
    });

    console.log(id);
  }, []);

  return (
    <div id="detailComponent">
      <CartDetail></CartDetail>
      {/* <Header detail={true} menuItems={menuItems}></Header> */}
      <HeroDetail></HeroDetail>
      <div className="container-fluid mx-auto" style={{ maxWidth: "90%" }}>
        <DetailTitle {...currentDetail}></DetailTitle>
        <div className="row mt-5">
          <div
            className="mx-auto col-12 border-bottom"
            style={{ maxWidth: "97%" }}
          >
            <h6>
              <i className="fa fa-star" aria-hidden="true"></i>
              Popular Items
            </h6>
          </div>
        </div>
        {detailItems.map((row) => {
          return <DetailCardListRow items={row}></DetailCardListRow>;
        })}
      </div>
    </div>
  );
};

export default DetailComponent;
