import React from "react";
import ImgComponent from "./ImgComponent";
import { epochToTime } from "../utils/utilities";

const TempHourly = ({ hourly, isFarenheit }) => {
  return (
    <div
      key={hourly.time_epoch}
      className="min-w-[80px] flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer"
    >
      <span className="text-xs">
        {hourly && epochToTime(hourly.time_epoch)}
      </span>
      <ImgComponent
        imgURL={hourly.condition.icon}
        imgTitle={hourly.condition.text}
      />
      <span className="text-xs">
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
