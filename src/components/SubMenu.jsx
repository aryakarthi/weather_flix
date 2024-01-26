import React, { useState } from "react";
import { epochToDayMonth } from "../utils/utilities";
import { IoIosArrowDown } from "react-icons/io";

const SubMenu = ({ info, daysForecast, isFarenheit }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <span>{epochToDayMonth(info.date_epoch)}</span>
        <span>
          {isFarenheit ? (
            <>
              {info.day.avgtemp_f} <sup>0</sup>F
            </>
          ) : (
            <>
              {info.day.avgtemp_c} <sup>0</sup>C
            </>
          )}
        </span>
        <img src={info.day.condition.icon} alt="" className="w-8" />
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </div>
      <ul
        className={`${
          subMenuOpen ? "h-fit" : "h-0"
        } flex flex-col pl-2 text-sm font-normal overflow-hidden`}
      >
        {daysForecast.map((dayFc) => (
          <li key={dayFc.date_epoch}>{dayFc.date}</li>
        ))}
      </ul>
    </>
  );
};

export default SubMenu;
