import React, { useEffect, useState } from "react";
import { Accordion } from "reactstrap";
import Film from "./Film";
import axios from "axios";

export default function Filmler(props) {
  const { movieId, movieChar } = props;
  const [filmler, setFilmler] = useState([]);

  /* useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => setFilmler(res.data[0].results))
      .catch((error) => error);
  }, []); */
  console.log("adsad");
  const [openFilm, setOpenFilm] = useState("");
  const toggleFilm = (id) => {
    if (openFilm == id) {
      setOpenFilm();
    } else {
      setOpenFilm(id);
    }
  };

  return (
    <div>
      <Accordion open={openFilm} toggle={toggleFilm}>
        <Film filmName={movieChar} filmId={movieId + 1} />;
      </Accordion>
    </div>
  );
}
