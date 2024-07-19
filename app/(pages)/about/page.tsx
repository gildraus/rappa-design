import dataSlider from "@/app/(data)/slider-data.json";
import Swiper from "@/app/ui/swiper";
export default function Page() {
  return (
    <div>
      <Swiper data={dataSlider}></Swiper>
    </div>
  );
}
