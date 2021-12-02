import React, { useState } from "react";
import { Input, Form, Button } from "semantic-ui-react";

function CitySearch({
  setCity,
  city,
  setApi,
  searchWord,
  setSearchWord,
  handleForm,
}) {
  return (
    <div className="citySearch">
      <div className="logo">
        <img
          src="https://www.vippng.com/png/detail/79-797561_mosque-islamic-architecture-silhouette-material-transprent-mosque-silhouette.png"
          alt="mosque"
        />
      </div>
      <h2> Namaz Vakitleri </h2>

      <Form onSubmit={handleForm}>
        <Input
          placeholder="Sehir..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <Button type="submit" circular fluid>
          Ara
        </Button>
      </Form>
    </div>
  );
}

export default CitySearch;
