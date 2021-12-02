import React from "react";
import Clock from "react-live-clock";

function ShowPrayerTimes({ api, city }) {

  const actualHour = new Date().getHours();
  const actualMinute = new Date().getMinutes();


  const findTheTimePeriod = (array) => {
    let newArray = [];
    array.map((time, i) => {
      if (+time.saat.slice(0, 2) === actualHour) {
        if (+time.saat.slice(3, 5) <= actualMinute) {
          newArray.push(time.vakit);
        } else {
          newArray.push(array[i - 1].vakit);
        }
      }

      if (+time.saat.slice(0, 2) < actualHour) {
        newArray.push(time.vakit);
      }
    });

    if (newArray.length === 0) {
      return "Yatsi";
    } else {
      return newArray[newArray.length - 1];
    }
  };

  return (
    <div className="prayerTimes">
      <div className="vakitler">
        <h3> {city[0].toUpperCase() + city.substring(1)} </h3>

        {api.map((timePeriod, i) => {
          return (
            <div key={i}>
              <span> {timePeriod.vakit} : </span>
              <span> {timePeriod.saat} </span>
            </div>
          );
        })}
      </div>

      <div className="currentTime">
        <p>Güncel Saat</p>
        <Clock format={"HH:mm:ss"} ticking={true} />
      </div>

      <div className="timePeriod">
        <p>Icinde Bulunulan Vakit</p>

        {findTheTimePeriod(api)}
      </div>
    </div>
  );
}

export default ShowPrayerTimes;
