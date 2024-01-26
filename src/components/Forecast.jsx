import React from "react";
import { epochToDateTime, epochToTime } from "../utils/utilities";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import ImgComponent from "./ImgComponent";
import SubMenu from "./SubMenu";

// import data from "../data/forecast.json";
// forecast: data,

const Forecast = ({ forecast: data, isFarenheit }) => {
  console.log(data);
  return (
    <>
      {data && (
        <section className="flex flex-col md:flex-row md:items-start gap-4">
          <aside className="flex flex-col gap-4 lg:w-1/3 md:w-1/2 w-full ">
            <div className="rounded-md p-4 bg-white bg-opacity-40 backdrop-blur-md drop-shadow-md -z-10">
              <h3>Now</h3>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-3xl">
                    {isFarenheit ? (
                      <>
                        {data?.current.temp_f} <sup>0</sup>F
                      </>
                    ) : (
                      <>
                        {data?.current.temp_c} <sup>0</sup>C
                      </>
                    )}
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
                    {data && epochToDateTime(data?.location.localtime_epoch)}
                  </span>
                </p>
              </div>
            </div>
            <div className="rounded-md p-4 bg-white bg-opacity-40 backdrop-blur-md drop-shadow-md z-50">
              <h3 className="mb-2">3days Forecast</h3>
              <div>
                {data?.forecast.forecastday?.map((info) => (
                  <div key={info.date_epoch} className="flex flex-col gap-1">
                    <SubMenu
                      info={info}
                      daysForecast={data?.forecast.forecastday}
                      isFarenheit={isFarenheit}
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <main className="flex flex-col gap-4 lg:w-2/3 md:w-1/2 w-full">
            <div className="rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-md -z-10">
              <h3 className="mb-2">Today's Highlights</h3>
              <div className="grid xl:grid-cols-2 xl:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">
                <div className=" bg-white bg-opacity-40 rounded-md p-4">
                  <h3 className="mb-2">Current Status</h3>
                  <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 text-sm">
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Humidity</span>
                      <span>{data?.current.humidity}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Pressure</span>
                      <span>{data?.current.pressure_mb}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Visibility</span>
                      <span>{data?.current.vis_km}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Feels like</span>
                      <span>
                        {isFarenheit ? (
                          <>
                            {data?.current.feelslike_f} <sup>0</sup>F
                          </>
                        ) : (
                          <>
                            {data?.current.feelslike_c} <sup>0</sup>C
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" bg-white bg-opacity-40 rounded-md p-4">
                  <h3 className="mb-2">Air Conditions</h3>
                  <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 text-sm">
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Gust</span>
                      <span>{data?.current.gust_kph}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Direction</span>
                      <span>{data?.current.wind_dir}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Speed</span>
                      <span>{data?.current.wind_kph}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>UV</span>
                      <span>{data?.current.uv}</span>
                    </div>
                  </div>
                </div>
                <div className=" bg-white bg-opacity-40 rounded-md p-4">
                  <h3 className="mb-2">Astro</h3>
                  <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 text-sm">
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Sun Rise</span>
                      <span>{data?.forecast.forecastday[0].astro.sunrise}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Sun Set</span>
                      <span>{data?.forecast.forecastday[0].astro.sunset}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Moon Rise</span>
                      <span>
                        {data?.forecast.forecastday[0].astro.moonrise}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Moon Set</span>
                      <span>{data?.forecast.forecastday[0].astro.moonset}</span>
                    </div>
                  </div>
                </div>
                <div className=" bg-white bg-opacity-40 rounded-md p-4">
                  <h3 className="mb-2">Temperature & Rain</h3>
                  <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 text-sm">
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Max Temp</span>
                      <span>
                        {isFarenheit ? (
                          <>
                            {data?.forecast.forecastday[0].day.maxtemp_f}{" "}
                            <sup>0</sup>F
                          </>
                        ) : (
                          <>
                            {data?.forecast.forecastday[0].day.maxtemp_c}{" "}
                            <sup>0</sup>C
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Min Temp</span>
                      <span>
                        {isFarenheit ? (
                          <>
                            {data?.forecast.forecastday[0].day.mintemp_f}{" "}
                            <sup>0</sup>F
                          </>
                        ) : (
                          <>
                            {data?.forecast.forecastday[0].day.mintemp_c}{" "}
                            <sup>0</sup>C
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Perciptation</span>
                      <span>{data?.current.precip_mm}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
                      <span>Snow</span>
                      <span>
                        {data?.forecast.forecastday[0].day.totalsnow_cm}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-md z-10">
              <h3 className="mb-2">Today's Forecast</h3>
              <div className=" bg-white bg-opacity-40 rounded-md p-4">
                <h4 className="mb-2">Temperature at</h4>
                <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-none mb-4">
                  {data?.forecast.forecastday[0].hour.map((h) => (
                    <div
                      key={h.time_epoch}
                      className="min-w-[80px] flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md hover:bg-opacity-80 hover:cursor-pointer"
                    >
                      <span className="text-xs">
                        {data && epochToTime(h.time_epoch)}
                      </span>
                      <img
                        src={h.condition.icon}
                        alt={h.condition.text}
                        className={`w-12 rotate-${h.wind_degree}`}
                      />
                      <span className="text-xs">
                        {isFarenheit ? (
                          <>
                            {h.temp_f} <sup>0</sup>F
                          </>
                        ) : (
                          <>
                            {h.temp_c} <sup>0</sup>C
                          </>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <h4 className="mb-2">Wind Speed & Direction at</h4>
                <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-none pb-1">
                  {data?.forecast.forecastday[0].hour.map((h) => (
                    <div
                      key={h.time_epoch}
                      className="min-w-[80px] flex flex-col items-center gap-2 bg-white rounded-md bg-opacity-50 p-2 hover:bg-opacity-80 hover:cursor-pointer"
                    >
                      <span className="text-xs">
                        {epochToTime(h.time_epoch)}
                      </span>

                      <ImgComponent
                        imgURL="/direction.png"
                        imgTitle={h.condition.text}
                        rotateDeg={h.wind_degree}
                      />
                      <span className="text-xs">{h.wind_dir}</span>
                      <span className="text-xs">{h.wind_kph}kmph</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </section>
      )}
    </>
  );
};

export default Forecast;
