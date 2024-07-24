import dataSlider from "@/app/(data)/slider-data.json";
import Swiper from "@/app/ui/swiper";
import Cities from "@/app/ui/citiescards";
import Team from "@/app/ui/aboutteam";
import Mission from "@/app/ui/mission";

export default function Page() {
  return (
    <div>
      <Swiper data={dataSlider}></Swiper>
      <Cities></Cities>
      {/* <Team></Team> */}
      {/* <Mission></Mission> */}
    </div>
  );
}
