import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const imageList = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuYYBwzMvCJA6Slm2LfEqD0HBAFO4s1pIghH1m2tUOODpYJInQDvA6pQbf-r3SayhprY&usqp=CAU",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYczC7TwUJ_Z9h3fOfVUm_-2OFngY0UNVcMlM_ubshstkOPzsvdxFxylwfDHbUmJZkIs&usqp=CAU",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYczC7TwUJ_Z9h3fOfVUm_-2OFngY0UNVcMlM_ubshstkOPzsvdxFxylwfDHbUmJZkIs&usqp=CAU",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnZVHdfdXz5axWgtli0dB5d--VtwH_iSOMUIPx4IhWb2GuPo6cpAX-sYyNUjyq1pNPiA&usqp=CAU",
    },
  ];

  return (
    <Slider {...settings}>
      {imageList.map((carousel) => (
        <div key={carousel.id} className="w-[90%] ">
          <img
            src={carousel.image}
            alt={carousel.id}
            className="w-[70%] h-[50%] text-center mx-auto rounded-3xl"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
