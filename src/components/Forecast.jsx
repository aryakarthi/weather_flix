import React from "react";

import data from "../data/forecast.json";

import { epochToDateTime } from "../utils/utilities";

import { MdLocationOn, MdAccessTime } from "react-icons/md";

const Forecast = ({ forecastData }) => {
  console.log(data);
  return (
    <section className="flex flex-col md:flex-row md:items-start gap-4">
      <aside className="lg:w-1/5 md:w-1/2 w-full -z-10">
        <div className="rounded-md p-4 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-md">
          <h3>Now</h3>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-3xl">
                {data?.current.temp_c}
                <sup>0</sup>C
              </span>
              <img src={data?.current.condition.icon} alt="condition" />
            </div>
            <p className="mb-2">{data?.current.condition.text}</p>
          </div>
          <div>
            <p className="flex items-center justify-start gap-2">
              <span>
                <MdLocationOn size={18} />
              </span>
              <span className="text-md">
                {data?.location.name}, {data?.location.country}
              </span>
            </p>
            <p className="flex items-center justify-start gap-2">
              <span>
                <MdAccessTime size={18} />
              </span>
              <span className="text-md">
                {epochToDateTime(data?.location.localtime_epoch)}
              </span>
            </p>
          </div>
        </div>
      </aside>
      <main className="lg:w-4/5 md:w-1/2 w-full -z-10">
        <div className="rounded-md p-4 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-md">
          <h3 className="mb-2">Today's Highlights</h3>
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">
            <div className=" bg-white bg-opacity-30 rounded-md p-4">
              <h3 className="mb-2">Current Status</h3>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Humidity</span>
                  <span>{data?.current.humidity}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Pressure</span>
                  <span>{data?.current.pressure_mb}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Visibility</span>
                  <span>{data?.current.vis_km}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Feels like</span>
                  <span>{data?.current.feelslike_c}</span>
                </div>
              </div>
            </div>
            <div className=" bg-white bg-opacity-30 rounded-md p-4">
              <h3 className="mb-2">Air Conditions</h3>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Gust</span>
                  <span>{data?.current.gust_kph}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Direction</span>
                  <span>{data?.current.wind_dir}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Speed</span>
                  <span>{data?.current.wind_kph}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">UV</span>
                  <span>{data?.current.uv}</span>
                </div>
              </div>
            </div>
            <div className=" bg-white bg-opacity-30 rounded-md p-4">
              <h3 className="mb-2">Astro</h3>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Sun Rise</span>
                  <span>{data?.forecast.forecastday[0].astro.sunrise}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Sun Set</span>
                  <span>{data?.forecast.forecastday[0].astro.sunset}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Moon Rise</span>
                  <span>{data?.forecast.forecastday[0].astro.moonrise}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Moon Set</span>
                  <span>{data?.forecast.forecastday[0].astro.moonset}</span>
                </div>
              </div>
            </div>
            <div className=" bg-white bg-opacity-30 rounded-md p-4">
              <h3 className="mb-2">Temperature & Rain</h3>
              <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Max Temp</span>
                  <span>{data?.forecast.forecastday[0].day.maxtemp_c}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Min Temp</span>
                  <span>{data?.forecast.forecastday[0].day.mintemp_c}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Perciptation</span>
                  <span>{data?.current.precip_mm}</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md">
                  <span className="text-sm">Snow</span>
                  <span>{data?.forecast.forecastday[0].day.totalsnow_cm}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Forecast;
