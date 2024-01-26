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
    isFarenheit,
    handleUnitChange,
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
        isFarenheit={isFarenheit}
        handleUnitChange={handleUnitChange}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      <Forecast forecast={forecast} isFarenheit={isFarenheit} />
    </div>
  );
};

export default App;
