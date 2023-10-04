import { useState } from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { CustomDot } from "./CustomDot";
import { customDotStyles } from "./customDotStyles";
import { slides } from "./slides";

export const CaruselSlider = () => {
  const [activeSlide, setActiveSlide] = useState("01");
  const totalSlides = "0" + (slides.length).toString();

  const handleSlideChange = (previousSlide, _ref) => {
    let currentSlideToString = (_ref.currentSlide - 1).toString();
    let visibleCurrentSlide = "0" + currentSlideToString;
    _ref.onMove;
    return setActiveSlide(visibleCurrentSlide);
  };

  return (
    <section className="relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay={true}
        autoPlaySpeed={3000}
        afterChange={handleSlideChange}
        centerMode={false}
        className="bg-red-800"
        // containerClass="container"
        customDot={<CustomDot />}
        currentSlide={activeSlide}
        totalItams={totalSlides}
        dotListClass={customDotStyles()}
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        // renderArrowsWhenDisabled={false}
        // renderButtonGroupOutside={true}
        // renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 1600,
              min: 769,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 375,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 768,
              min: 376,
            },
            items: 1,
          },
        }}
        rewind={true}
        // rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {slides}
      </Carousel>
      <div className="container relative">
        <div className="absolute bottom-[26px] left-[50%] translate-x-[-162px] text-s text-wightColor font-medium leading-[1.2] uppercase">
          {activeSlide}
        </div>
        <div className="absolute bottom-[26px] right-[50%] translate-x-[162px] text-s text-wightColor font-medium leading-[1.2] uppercase">
          {totalSlides}
        </div>
      </div>
    </section>
  );
};
