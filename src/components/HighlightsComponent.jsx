import React from "react";

const HighlightsComponent = ({ data, isFarenheit }) => {
  return (
    <>
      <div className=" bg-white bg-opacity-30 rounded-md p-4">
        <h3 className="mb-2 font-medium text-red-500">{data.heading}</h3>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-2">
          {data?.readings?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-white bg-opacity-40 p-2 rounded-md"
            >
              <span className="text-xs font-medium text-emerald-500">{d.title}</span>
              <span>
                <d.icon size={24} />
              </span>
              <span  className="text-sm">
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
        </div>
      </div>
    </>
  );
};

export default HighlightsComponent;
