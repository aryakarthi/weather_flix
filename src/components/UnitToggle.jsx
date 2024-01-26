import React, { useState } from "react";

const UnitToggle = ({ isFarenheit, handleUnitChange }) => {
  return (
    <div className="w-12">
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isFarenheit}
          onChange={handleUnitChange}
          className="hidden"
        />

        <div className="absolute flex items-center justify-center rounded-md bg-white bg-opacity-40">
          <span
            className={`text-xs font-medium flex h-6 w-6 items-center justify-center rounded-l-md ${
              !isFarenheit ? "bg-blue-400 text-white" : "text-black"
            }`}
          >
            <sup>0</sup>C
          </span>
          <span
            className={`text-xs font-medium flex h-6 w-6 items-center justify-center rounded-r-md ${
              isFarenheit ? "bg-blue-400 text-white" : "text-black"
            }`}
          >
            <sup>0</sup>F
          </span>
        </div>
      </label>
    </div>
  );
};

export default UnitToggle;
