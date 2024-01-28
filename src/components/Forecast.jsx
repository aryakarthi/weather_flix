import React from "react";
import SubMenu from "./SubMenu";
import WindHourly from "./WindHourly";
import TempHourly from "./TempHourly";
import HighlightsComponent from "./HighlightsComponent";
import NowComponent from "./NowComponent";

// import data from "../data/forecast.json";
// forecast: data,

const Forecast = ({ forecast: data, isFarenheit }) => {
  console.log(data);

  if (!data) return;

  const {
    temp_c,
    temp_f,
    humidity,
    pressure_mb,
    vis_km,
    feelslike_c,
    feelslike_f,
    gust_kph,
    wind_dir,
    wind_kph,
    uv,
    precip_mm,
  } = data?.current;

  const { icon, text } = data?.current.condition;

  const { name, country, localtime_epoch } = data?.location;

  const weatherNow = {
    icon,
    text,
    name,
    country,
    localtime_epoch,
    temp_c,
    temp_f,
  };

  const threeDaysForecast = data?.forecast.forecastday;

  const { sunrise, sunset, moonrise, moonset } = threeDaysForecast[0].astro;

  const { maxtemp_f, maxtemp_c, mintemp_f, mintemp_c, totalsnow_cm } =
    threeDaysForecast[0].day;

  const highlights = [
    {
      id: 1,
      heading: "Current Status",
      readings: [
        { title: "Humidity", value: humidity, unit: "%" },
        { title: "Pressure", value: pressure_mb, unit: "hPa" },
        { title: "Visibility", value: vis_km, unit: "km" },
        {
          title: "Feels Like",
          value: { celsius: feelslike_c, farenheit: feelslike_f },
        },
      ],
    },
    {
      id: 2,
      heading: "Air Conditions",
      readings: [
        { title: "Gust", value: gust_kph, unit: "km/h" },
        { title: "Direction", value: wind_dir },
        { title: "Speed", value: wind_kph, unit: "km/h" },
        { title: "UV", value: uv },
      ],
    },
    {
      id: 3,
      heading: "Astro",
      readings: [
        { title: "Sun Rise", value: sunrise },
        { title: "Sun Set", value: sunset },
        { title: "Moon Rise", value: moonrise },
        { title: "Moon Set", value: moonset },
      ],
    },
    {
      id: 4,
      heading: "Temperature & Rain",
      readings: [
        {
          title: "Max Temp",
          value: { celsius: maxtemp_c, farenheit: maxtemp_f },
        },
        {
          title: "Min Temp",
          value: { celsius: mintemp_c, farenheit: mintemp_f },
        },
        { title: "Perciptation", value: precip_mm, unit: "mm" },
        { title: "Snow", value: totalsnow_cm, unit: "cm" },
      ],
    },
  ];

  return (
    <>
      {data && (
        <section className="flex flex-col md:flex-row md:items-start gap-4">
          <aside className="flex flex-col gap-4 lg:w-1/3 md:w-1/2 w-full ">
            <div className="rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-md -z-10">
              <NowComponent isFarenheit={isFarenheit} now={weatherNow} />
            </div>
            <div className="rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-md z-50">
              <h3 className="mb-2">3 Days Forecast</h3>
              <div className="">
                <p className="flex flex-1 justify-between mb-2 text-sm font-semibold px-2">
                  <span>Day</span>
                  <span className="ml-4">Avg Temp</span>
                  <span className="mr-4">Status</span>
                  <span></span>
                </p>
                {threeDaysForecast?.map((info) => (
                  <div key={info.date_epoch} className="flex flex-col gap-1">
                    <SubMenu
                      info={info}
                      daysForecast={threeDaysForecast}
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
                {highlights?.map((hl) => (
                  <HighlightsComponent
                    key={hl.id}
                    data={hl}
                    isFarenheit={isFarenheit}
                  />
                ))}
              </div>
            </div>
            {/* Today's Forecast */}
            <div className="rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-md z-10">
              <h3 className="mb-2">Today's Forecast</h3>
              <div className=" bg-white bg-opacity-30 rounded-md p-4">
                <h4 className="mb-2">Temperature at</h4>
                <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-none mb-4">
                  {threeDaysForecast[0].hour.map((item) => (
                    <TempHourly
                      key={item.time_epoch}
                      hourly={item}
                      isFarenheit={isFarenheit}
                    />
                  ))}
                </div>
                <h4 className="mb-2">Wind Speed & Direction at</h4>
                <div className="flex flex-1 items-center gap-2 overflow-x-scroll scrollbar-none pb-1">
                  {threeDaysForecast[0].hour.map((item) => (
                    <WindHourly key={item.time_epoch} hourly={item} />
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
