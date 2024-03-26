import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SImageSliderHolder } from "@src/components/ImageSlider";
import PSControllerImg from "@src/assets/images/PSControllerImg.jpg";
import GamingSetupImg from "@src/assets/images/GamingSetupImg.jpg";
import IphoneCollectionImg from "@src/assets/images/IphoneCollectionImg.jpg";
import ShipEverywhereImg from "@src/assets/images/ShipEverywhereImg.jpg";
import EcommerceCartImg from "@src/assets/images/EcommerceCartImg.jpg";

export function ImageSlider() {
  const images = useMemo(
    () => [
      PSControllerImg,
      GamingSetupImg,
      IphoneCollectionImg,
      EcommerceCartImg,
      ShipEverywhereImg,
    ],
    []
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    fade: true,
    waitForAnimate: false,
    pauseOnHover: false,
  };

  return (
    <SImageSliderHolder>
      <Slider {...settings}>
        {images.map((img) => {
          return (
            <div key={img}>
              <img src={img} alt="slider image" />
            </div>
          );
        })}
      </Slider>
    </SImageSliderHolder>
  );
}
