import React from "react";
import ImgComponent from "./ImgComponent";
import { everyHour } from "../utils/utilities";

const TempHourly = ({ hourly, isFarenheit }) => {
  const hour = hourly.time.split(" ")[1];

  return (
    <div
      key={hourly.time_epoch}
      className="min-w-[80px] flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer"
    >
      <span className="text-xs font-medium text-emerald-600">
        {hourly && everyHour(hour)}
      </span>
      <ImgComponent
        imgURL={hourly.condition.icon}
        imgTitle={hourly.condition.text}
      />
      <span className="text-xs font-medium">
        {isFarenheit ? (
          <>
            {hourly.temp_f} <sup>0</sup>F
          </>
        ) : (
          <>
            {hourly.temp_c} <sup>0</sup>C
          </>
        )}
      </span>
    </div>
  );
};

export default TempHourly;
