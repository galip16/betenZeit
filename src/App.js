import React, { useEffect, useState } from 'react';
import './App.css';
import CityNotFound from './components/CityNotFound';
import CitySearch from './components/CitySearch';
import ShowPrayerTimes from './components/ShowPrayerTimes';
import getTheApi from "./functions/getTheApi";



function App() {

  const [city, setCity] = useState("");
  const [api, setApi] = useState(null);

  const [responseStatus, setResponseStatus] = useState(true)



  const handleForm = () => {

    getTheApi(city).then((result) => {

      if (!result.status) {
        setResponseStatus(false)
      }
      else {
        setApi(result.result)
        setResponseStatus(true)
      }
    }
    );

  };













  //api var ve city nin uzunlugu 0 dan büyükse



  return (
    <div className="App">

      {
        api ?
          <ShowPrayerTimes api={api} city={city} />
          :
          responseStatus ?
            <CitySearch setCity={setCity} setApi={setApi} city={city} handleForm={handleForm} />
            :
            <CityNotFound />
      }

    </div>
  );
}

export default App;
