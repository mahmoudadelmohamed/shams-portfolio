import { Settings } from "react-slick";
export const defaultDuration = 1;
export const defaultEase = [0.43, 0.13, 0.23, 0.96];

export const defaultTrasition = {
  duration: 1.25,
  ease: [0.43, 0.13, 0.23, 0.96]
}

export const PROJECTS_SECTION_SLIDER_SETTINGS: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }
  ]
};

export const PEOPLE_RECOMMEND_ME_SECTION_SLIDER_SETTINGS: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 600, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};
