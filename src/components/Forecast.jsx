import React from "react";

const Forecast = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4">
      <aside className="lg:w-1/5 md:w-1/2 w-full rounded-md p-4 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-md">
        <h3>Now</h3>
        <div>data</div>
        <div>desc</div>
      </aside>
      <main className="lg:w-4/5 md:w-1/2 w-full rounded-md p-4 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-md">
        <h3>Highlights</h3>
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 gap-4">
          <div className=" bg-white bg-opacity-40">Hello</div>
          <div className=" bg-white bg-opacity-40">Hello</div>
          <div className=" bg-white bg-opacity-40">Hello</div>
          <div className=" bg-white bg-opacity-40">Hello</div>
        </div>
      </main>
    </section>
  );
};

export default Forecast;
