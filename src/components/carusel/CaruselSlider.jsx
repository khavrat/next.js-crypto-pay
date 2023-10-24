import { useState, useLayoutEffect, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { CustomDot } from "./CustomDot";
import '../../app/caruselStyles/dotList.css'
import { slides } from "./slides/slides";

export const CaruselSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeSlide, setActiveSlide] = useState("01");
  let totalSlides = "";

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const totalSlidesToShow = () => {
    if (slides.length < 10) {
      return (totalSlides = "0" + slides.length.toString());
    } else {
      return (totalSlides = slides.length.toString());
    }
  };

  const handleSlideChange = (previousSlide, _ref) => {
    let currentSlide = _ref.currentSlide - 1;
    _ref.onMove;
    if (previousSlide > slides.length) {
      console.log(
        "previousSlide > slides.length :>> ",
        previousSlide > slides.length
      );
      setActiveSlide("01");
    } else if (currentSlide < 10) {
      let visibleCurrentSlide = "0" + currentSlide.toString();
      setActiveSlide(visibleCurrentSlide);
    } else {
      let visibleCurrentSlide = currentSlide.toString();
      setActiveSlide(visibleCurrentSlide);
    }
  };

  return (
    <section className="relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay={true}
        // autoPlaySpeed={3000}
        afterChange={handleSlideChange}
        centerMode={false}
        className="bg-red-800 z-[-1] "
        containerClass="container"
        customDot={<CustomDot />}
        currentSlide={activeSlide}
        totalItams={totalSlidesToShow()}
        dotListClass={
          windowWidth >= 768
            ? "react-multi-carousel-dot-list-lg"
            : "react-multi-carousel-dot-list-sm"
        }
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        removeArrowOnDeviceType={["desktop", "predesktop", "tablet", "mobile"]}
        // renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 1600,
              min: 1400,
            },
            items: 1,
          },
          predesktop: {
            breakpoint: {
              max: 1399,
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
        rewindWithAnimation={true}
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
