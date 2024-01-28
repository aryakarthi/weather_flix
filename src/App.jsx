import React from "react";

import Header from "./components/Header";
import Forecast from "./components/Forecast";
import useForecast from "./hooks/useForecast";

const App = () => {
  const {
    term,
    setTerm,
    options,
    city,
    forecast,
    isFarenheit,
    location,
    setLocation,
    handleUnitChange,
    handleLocationClick,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast();

  return (
    <div className="min-h-screen py-4 container">
      <Header
        term={term}
        setTerm={setTerm}
        options={options}
        city={city}
        isFarenheit={isFarenheit}
        location={location}
        setLocation={setLocation}
        handleUnitChange={handleUnitChange}
        handleLocationClick={handleLocationClick}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      <Forecast forecast={forecast} isFarenheit={isFarenheit} />
    </div>
  );
};

export default App;
