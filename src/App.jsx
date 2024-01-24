import React from "react";

import Header from "./components/Header";
import Forecast from "./components/Forecast";
import useForecast from "./hooks/useForecast";

const App = () => {
  const {
    term,
    options,
    city,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast();

  return (
    <div className="min-h-screen py-4 container">
      <Header
        term={term}
        options={options}
        city={city}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
