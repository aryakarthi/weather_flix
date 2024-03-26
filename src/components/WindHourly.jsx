import React from "react";
import ImgComponent from "./ImgComponent";
import { everyHour } from "../utils/utilities";

const WindHourly = ({ hourly }) => {
  const hour = hourly.time.split(" ")[1];

  return (
    <div className="min-w-[80px] flex flex-col items-center gap-2 bg-white rounded-md bg-opacity-40 p-2 hover:bg-opacity-80 hover:cursor-pointer">
      <span className="text-xs font-medium text-emerald-600">
        {hourly && everyHour(hour)}
      </span>

      <ImgComponent
        imgURL="/direction.png"
        imgTitle={hourly.condition.text}
        rotateDeg={hourly.wind_degree}
      />
      <span className="text-xs font-medium">{hourly.wind_dir}</span>
      <span className="text-xs font-medium">{hourly.wind_kph}km/h</span>
    </div>
  );
};

export default WindHourly;
