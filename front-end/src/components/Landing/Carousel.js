import React from "react";
import { Carousel as CarouselAntd, Button } from "antd";
import Carousel1 from "../../assets/carousel1.jpg";
import Carousel2 from "../../assets/carousel2.jpg";
import Carousel3 from "../../assets/carousel3.jpg";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Carousel() {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "unset",
          fontSize: 25,
          right: -30,
        }}
        onClick={onClick}
      >
        <RightOutlined theme="outlined" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "unset",
          fontSize: 25,
          left: -35,
        }}
        onClick={onClick}
      >
        <LeftOutlined theme="outlined" />
      </div>
    );
  };

  return (
    <section className="container mx-auto">
      <CarouselAntd
        infinite
        arrows
        // autoplay
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        className="mt-10 mb-20"
      >
        <div className="carousel-height relative">
          <div className="absolute top-64 left-48">
            <div className="text-4xl text-white">
              Geriausi receptai Jūsų vakarui
            </div>
            <div className="pt-5">
              <Button ghost size={"large"}>
                Peržiūrėti receptus
              </Button>
            </div>
          </div>
          <img
            src={Carousel1}
            className="object-cover"
            style={{ objectPosition: "0 -200px" }}
            alt="tomatoes"
          />
        </div>
        <div className="carousel-height">
          <img src={Carousel2} className="object-cover" alt="pizza" />
        </div>
        <div className="carousel-height">
          <img src={Carousel3} className="object-cover" alt="spaghetti" />
        </div>
      </CarouselAntd>
    </section>
  );
}

export default Carousel;
