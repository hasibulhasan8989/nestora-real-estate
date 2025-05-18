// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const Banner = () => {
  const imgLink = [
    "https://i.ibb.co/99dv5N4w/dillon-kydd-2ke-CPb73a-QY-unsplash-1.jpg",
    "https://i.ibb.co/cSHTptNB/bailey-anselme-Bkp3g-Lygye-A-unsplash-1.jpg",
    "https://i.ibb.co/FqJrfn9G/ian-macdonald-W8z6aiwfi1-E-unsplash-1.jpg",
    "https://i.ibb.co/ym49PcsJ/ronnie-george-z11gb-Bo13ro-unsplash-1.jpg",
    "https://i.ibb.co/1JZfTkJL/todd-kent-178j8t-Jr-Nlc-unsplash-1.jpg",
  ];
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //  -----
      spaceBetween={50}
      slidesPerView={2}
      navigation
      
      
      
      className="mySwiper "
    >
      {imgLink.map((img) => (
        <SwiperSlide>
          <img className="rounded-2xl  " src={img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
