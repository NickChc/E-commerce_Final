import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProduct } from "@src/@types/general";
import { ProductCard } from "@src/components/ProductCard";
import { SProductSliderWrapper } from "@src/components/ProductSlider";
import { CustomArrow } from "@src/components/ProductSlider/CustomArrow";

interface ProductSliderProps {
  products: TProduct[];
  title?: string;
  showSlides?: number;
}

export function ProductSlider({ products, title, showSlides }: ProductSliderProps) {
  const [swiping, setSwiping] = useState<boolean>(false);
  const slidesToShow = showSlides || 5;

  if (products.length === 0) return;

  const settings = {
    dots: false,
    infinite: products.length > 5,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: products.length > 5,
    prevArrow: <CustomArrow side="left" disabled={products.length < 5} />,
    nextArrow: <CustomArrow side="right" disabled={products.length < 5} />,
    swipe: products.length > 5,
    swipeToSlide: true,
    beforeChange: () => setSwiping(true),
    afterChange: () => setSwiping(false),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 1,
          swipe: products.length > 4,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: slidesToShow - 2,
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
