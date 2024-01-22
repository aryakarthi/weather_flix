import { MdSearch, MdMyLocation } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-md p-4 my-4">
      <div className="flex gap-2">
        <img src="/weather_flix_logo.png" alt="Weather Flix" />
        <h2 className="text-2xl font-black">Weather Flix</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-slate-500 flex items-center rounded-md overflow-hidden order-2">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter city"
            className="outline-none border-none p-2"
          />
          <button className="bg-blue-400 inline-block h-10 px-4">
            <MdSearch size={20} />
          </button>
        </div>
        <div className="flex gap-4 order-1">
          <div className="bg-blue-400 w-10 h-10 rounded-full grid place-items-center">
            <MdMyLocation />
          </div>
          <div className="flex bg-blue-400 w-20 h-10 rounded-md">
            <div className="w-10 grid place-items-center border-r-2 border-zinc-300">
              <span>
                <sup>0</sup>C
              </span>
            </div>
            <div className="w-10 grid place-items-center">
              <span>
                <sup>0</sup>F
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
