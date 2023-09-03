import React, { useEffect, useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import "../karakter.css";
import styled from "styled-components";
import Filmler from "./Filmler";
// Karakter bileşeniniz buraya gelecek

const Karakter = (props) => {
  const StyItem = styled.div`
    font-size: 2rem;
  `;
  const StyName = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
  `;
  const [cinsiyet, setCinsiyet] = useState("");
  const { id, karakter } = props;
  useEffect(() => {
    if (karakter.gender == "male") {
      setCinsiyet("Erkek");
    } else if (karakter.gender == "female") {
      setCinsiyet("Kadın");
    } else {
      setCinsiyet("Bilinmiyor");
    }
  }, [cinsiyet]);
  return (
    <div className="main-div">
      <AccordionItem className="mt-2" key={`accordion-item-${id}`}>
        <AccordionHeader targetId={id.toString()}>
          <StyName className="ad">{karakter.name}</StyName>
        </AccordionHeader>
        <AccordionBody accordionId={id.toString()}>
          <StyItem className="boy">Boy: {karakter.height} cm</StyItem>
          <StyItem className="kutle">Ağırlık: {karakter.mass} kg</StyItem>
          <StyItem className="cinsiyet">Cinsiyet: {cinsiyet}</StyItem>
          <StyItem className="sac">Saç rengi: {karakter.hair_color}</StyItem>
          <StyItem className="ten">Ten rengi: {karakter.skin_color}</StyItem>
          <StyItem className="goz">Göz rengi: {karakter.eye_color}</StyItem>
          <StyItem className="dogum">Doğum yılı: {karakter.birth_year}</StyItem>
          {/* {karakter.films.map((movieChar, i) => {
            <Filmler movieChar={movieChar} movieId={i} />;
          })} */}
        </AccordionBody>
      </AccordionItem>
    </div>
  );
};

export default Karakter;
