import React from "react";

const HighlightsComponent = ({ data, isFarenheit }) => {
  return (
    <>
      <div className=" bg-white bg-opacity-40 rounded-md p-4">
        <h3 className="mb-2">{data.heading}</h3>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2 text-sm">
          {data?.readings?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md"
            >
              <span>{d.title}</span>
              <span>
                {typeof d.value !== "object" ? (
                  d.value
                ) : isFarenheit ? (
                  <>
                    {" "}
                    {d.value.farenheit}
                    <sup>0</sup>F
                  </>
                ) : (
                  <>
                    {" "}
                    {d.value.celsius}
                    <sup>0</sup>C
                  </>
                )}
                {d.unit && <span>{d.unit}</span>}
              </span>
            </div>
          ))}

          {/* <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
              <span>Pressure</span>
              <span>{data?.current.pressure_mb}</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
              <span>Visibility</span>
              <span>{data?.current.vis_km}</span>
            </div> */}

          {/* <div className="flex flex-col items-center gap-2 bg-white bg-opacity-50 p-2 rounded-md">
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
            </div> */}
        </div>
      </div>
    </>
  );
};

export default HighlightsComponent;
