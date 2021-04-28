import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeCardRow from './components/HomeCardRow';

import './App.scss';

const menuItems = [
  {
    "value": "Food",
    "href": "#"
  },
  {
    "value": "Fresh",
    "href": "#"
  },
  {
    "value": "Drinks",
    "href": "#"
  },
  {
    "value": "Convenience",
    "href": "#"
  }
]

const homeItems = [
  [{
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fe22b3b30-272b-4cd2-92d3-2ab4f79ba7da%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  },
  {
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F0e8d44fd-42ee-4f55-8142-fc2c9e934944%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  },
  {
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fa700d2ec-08da-4e7e-addb-779d86d1a1ba%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  }],
  [{
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2Fcbf49434-6c68-4947-862a-99b66fb2a01b%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  },
  {
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F11412514-4003-4b63-af71-ba69fdfdc148%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  },
  {
    "title": "Title",
    "link": "./pages/card_detail.html",
    "desc": "Description",
    "image": "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F4b7f26df-966e-49b3-b483-a643816b70ea%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=webp&v=4"
  }]
  
]

const App = () => (
  <div>
    <Header detail={false} menuItems={menuItems}></Header>
    <Hero></Hero>
    <div className="container-fluid mx-auto" style={{"maxWidth": '70%'}}>
        <div className="row mt-5">
            <div className="mx-auto col-12" style={{"maxWidth": '97%'}}>
                <h3>Daily deals</h3>
                <span>Epic deals from your favourite restaurants</span>
            </div>
        </div>
        {homeItems.map(i => {
          return <HomeCardRow items={i}></HomeCardRow>
        })}
    </div>
  </div>
);

export default App;