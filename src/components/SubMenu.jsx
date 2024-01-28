import React, { useState } from "react";
import { epochToDayMonth } from "../utils/utilities";
import { IoIosArrowDown } from "react-icons/io";

const SubMenu = ({ info, isFarenheit }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const { sunrise, sunset, moonrise, moonset } = info.astro;
  const {
    avghumidity,
    avgvis_km,
    daily_chance_of_rain,
    daily_chance_of_snow,
    maxtemp_c,
    maxtemp_f,
    mintemp_c,
    mintemp_f,
  } = info.day;

  const dailyForecast = [
    { id: 1, title: "Sun Rise", value: sunrise },
    { id: 2, title: "Sun Set", value: sunset },
    { id: 3, title: "Moon Rise", value: moonrise },
    { id: 4, title: "Moon Set", value: moonset },
    { id: 5, title: "Aveg Humidity", value: avghumidity, unit: "%" },
    { id: 6, title: "Aveg Visibility", value: avgvis_km, unit: "km" },
    { id: 7, title: "Chance of Rain", value: daily_chance_of_rain, unit: "%" },
    { id: 8, title: "Chance of Snow", value: daily_chance_of_snow, unit: "%" },
    {
      id: 9,
      title: "Max Temperature",
      value: { celsius: maxtemp_c, farenheit: maxtemp_f },
    },
    {
      id: 10,
      title: "Min Temperature",
      value: { celsius: mintemp_c, farenheit: mintemp_f },
    },
  ];

  return (
    <>
      <div
        className="flex items-center justify-between text-sm px-2 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-md rounded-md hover:cursor-pointer"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <span className="flex-1 text-emerald-600 font-medium">
          {epochToDayMonth(info.date_epoch)}
        </span>
        <span className="flex-1 text-center">
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
        <span className="flex-1">
          <img src={info.day.condition.icon} alt="" className="w-8 ml-auto" />
        </span>
        <span className="flex-1">
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 ml-auto`}
          />
        </span>
      </div>
      <ul
        className={`${
          subMenuOpen ? "h-fit mb-2" : "h-0"
        } flex flex-col gap-2 px-2 text-sm font-normal overflow-hidden`}
      >
        {dailyForecast.map((dailyFc) => (
          <li
            key={dailyFc.id}
            className="flex justify-between hover:cursor-pointer hover:text-red-500"
          >
            <span>{dailyFc.title}</span>
            <span>
              {typeof dailyFc.value !== "object" ? (
                dailyFc.value
              ) : isFarenheit ? (
                <>
                  {" "}
                  {dailyFc.value.farenheit}
                  <sup>0</sup>F
                </>
              ) : (
                <>
                  {" "}
                  {dailyFc.value.celsius}
                  <sup>0</sup>C
                </>
              )}
              {dailyFc.unit && <span>{dailyFc.unit}</span>}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubMenu;
