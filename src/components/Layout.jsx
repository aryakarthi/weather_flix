import React from "react";
import Header from "./Header";
import Forecast from "./Forecast";

const Layout = () => {
  return (
    // <div className='min-h-screen 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm sm:max-w-xl mx-auto'>
    <div className="container">
      <Header />
      <Forecast />
    </div>
  );
};

export default Layout;
