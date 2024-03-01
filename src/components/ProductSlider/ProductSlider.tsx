import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProduct } from "@src/@types/general";
import { ProductCard } from "@src/components/ProductCard";
import {
  SProductSliderWrapper,
  SCustomArrow,
} from "@src/components/ProductSlider";
import { LeftArrow, RightArrow } from "@src/assets/icons";

interface ProductSliderProps {
  products: TProduct[];
  title?: string;
}

interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ProductSlider({ products, title }: ProductSliderProps) {
  const [swiping, setSwiping] = useState<boolean>(false);

  function LeftCustomArrow({ onClick }: CustomArrowProps) {
    return (
      <SCustomArrow
        side="left"
        onClick={onClick}
        disabled={products.length <= 5}
      >
        <LeftArrow />
      </SCustomArrow>
    );
  }

  function RightCustomArrow({ onClick }: CustomArrowProps) {
    return (
      <SCustomArrow
        side="right"
        onClick={onClick}
        disabled={products.length <= 5}
      >
        <RightArrow />
      </SCustomArrow>
    );
  }

  if (products.length === 0) return;

  const settings = {
    dots: false,
    infinite: products.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: true,
    prevArrow: <LeftCustomArrow />,
    nextArrow: <RightCustomArrow />,
    swipe: products.length > 5,
    swipeToSlide: true,
    beforeChange: () => setSwiping(true),
    afterChange: () => setSwiping(false),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipe: products.length > 4,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          swipe: products.length > 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          swipe: products.length > 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <SProductSliderWrapper>
      {title && <h1>{title}</h1>}
      <Slider {...settings}>
        {products?.map((product) => {
          return (
            <ProductCard key={product.id} product={product} disable={swiping} />
          );
        })}
      </Slider>
    </SProductSliderWrapper>
  );
}
