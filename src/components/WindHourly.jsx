import React from "react";
import ImgComponent from "./ImgComponent";
import { epochToTime } from "../utils/utilities";

const WindHourly = ({ hourly }) => {
  return (
    <div className="min-w-[80px] flex flex-col items-center gap-2 bg-white rounded-md bg-opacity-50 p-2 hover:bg-opacity-80 hover:cursor-pointer">
      <span className="text-xs">{epochToTime(hourly.time_epoch)}</span>

      <ImgComponent
        imgURL="/direction.png"
        imgTitle={hourly.condition.text}
        rotateDeg={hourly.wind_degree}
      />
      <span className="text-xs">{hourly.wind_dir}</span>
      <span className="text-xs">{hourly.wind_kph}kmph</span>
    </div>
  );
};

export default WindHourly;