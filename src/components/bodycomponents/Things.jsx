import React from "react";
import { Card } from "./Services";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./bodystyles.css"
import { Carousel } from "react-responsive-carousel";

function Things() {
  return (
    <div className="things my-5">
      <h1>Things To do</h1>
      <div className="things_card d-flex flex-wrap m-2 justify-content-between">
      <Card
        title="Wineries Tour"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      <Card
        title="Cultural Sites"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      <Card
        title="Market Tour"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      <Card
        title="Leisure Activities"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      <Card
        title="Horse Riding"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      <Card
        title="Birds Safari"
        para="I'm a paragraph. Click here to add your own text and edit me."
      />
      </div>

      {/* ----------------Testinomials------------------------- */}

      <div className="testinomials">
            <Carousel autoPlay>
          <div className="testinomaial_carousel">
            <h1>GUEST REVIEWS</h1>
            <img src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_21,h_18,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp" alt=""/>
            <p>“I'm a paragraph. Click here to add your own text and edit me.”</p>
          </div>
          <div className="testinomaial_carousel">
            <h1>GUEST REVIEWS</h1>
            <img src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_21,h_18,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp" alt=""/>
            <p>“I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”</p>
          </div>
          <div className="testinomaial_carousel">
            <h1>GUEST REVIEWS</h1>
            <img src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_21,h_18,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp" alt=""/>
            <p>“I'm a paragraph. Click here to add your own text and edit me.”</p>
          </div>
          
            </Carousel>
      </div>
    </div>
  );
}

export default Things;
