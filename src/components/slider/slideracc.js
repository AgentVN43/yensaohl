import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import phukien from "../../db/phukien.json";
import Products from "../products";
register();

export const SliderAcc = () => {
  const swiperElRef = useRef(null);

  console.log(phukien);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <Products category={7} />
   
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        space-between={30}
        navigation="true"
        pagination="true"
        autoplay-delay="3000"
        autoplay-disable-on-interaction="false"
        style={{
          width: "73%",
          margin: "0 auto", // Center the container itself
          padding: "0",
        }}
      >
        {phukien.map((item, index) => (
          <swiper-slide>
            <img
              src={item.path}
              alt="phụ kiện ngành yến"
              className="img-fluid rounded-3"
              style={{
                display: "block", 
                margin: "0 auto", 
                maxHeight: "400px",
              }}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};
