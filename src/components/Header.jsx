import { MdSearch, MdMyLocation } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

import UnitToggle from "./UnitToggle";

const Header = ({
  term,
  setTerm,
  options,
  isFarenheit,
  handleUnitChange,
  handleLocationClick,
  onInputChange,
  onOptionSelect,
  onSubmit,
}) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white bg-opacity-30 backdrop-blur-md rounded-md drop-shadow-md p-4 mb-4">
      <div className="flex gap-2">
        <img src="/weather_flix_logo.png" alt="Weather Flix" />
        <h2 className="text-xl font-bold text-zinc-700">WeatherFlix</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex items-center rounded-md order-2 z-50">
          {term && (
            <IoCloseCircle
              size={18}
              className="absolute right-14 text-red-500 hover:cursor-pointer"
              onClick={() => setTerm("")}
            />
          )}
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter city"
            className="outline-none border-none px-4 py-2 rounded-l-full"
            value={term}
            onChange={onInputChange}
          />
          <button
            className="bg-blue-400 inline-block h-10 px-4 rounded-r-full"
            onClick={onSubmit}
          >
            <MdSearch size={20} />
          </button>

          <ul className="absolute top-11 left-0 bg-white rounded-md overflow-hidden z-50">
            {options.map((option, index) => (
              <li key={option.name + "-" + index}>
                <button
                  className="text-left text-sm w-full hover:bg-blue-400 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => {
                    onOptionSelect(option);
                    console.log(option);
                  }}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 order-1">
          <div
            className="bg-blue-400 w-8 h-8 rounded-full grid place-items-center"
            onClick={handleLocationClick}
          >
            <MdMyLocation />
          </div>

          <div>
            <UnitToggle
              isFarenheit={isFarenheit}
              handleUnitChange={handleUnitChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
