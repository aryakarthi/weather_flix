import React from "react";
import { MdAccessTime, MdLocationOn } from "react-icons/md";
import { epochToDateTime } from "../utils/utilities";

const NowComponent = ({ isFarenheit, now }) => {
  return (
    <>
      <h3 className="font-semibold">Now</h3>
      <div className="flex items-center justify-between">
        <span className="font-bold text-3xl">
          {isFarenheit ? (
            <>
              {now?.temp_f} <sup>0</sup>F
            </>
          ) : (
            <>
              {now?.temp_c} <sup>0</sup>C
            </>
          )}
        </span>
        <img src={now?.icon} alt="condition" />
      </div>
      <p className="mb-2 font-medium text-emerald-600">{now?.text}</p>
      <div className="flex flex-col gap-2">
        <p className="flex items-center justify-start gap-2">
          <span>
            <MdLocationOn size={18} />
          </span>
          <span className="text-sm font-medium">
            {now?.name}, {now?.country}
          </span>
        </p>
        <p className="flex items-center justify-start gap-2">
          <span>
            <MdAccessTime size={18} />
          </span>
          <span className="text-sm font-medium">
            {now && epochToDateTime(now?.localtime_epoch)}
          </span>
        </p>
      </div>
    </>
  );
};

export default NowComponent;
