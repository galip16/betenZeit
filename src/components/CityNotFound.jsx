import React from "react";

function CityNotFound() {
  return (
    <div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png"
        alt="notFound"
      />
      <h6>Böyle bir sehir bulunamadi ! </h6>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Yeniden Dene
      </button>
    </div>
  );
}

export default CityNotFound;
