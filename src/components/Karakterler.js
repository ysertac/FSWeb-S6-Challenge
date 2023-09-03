import React, { useEffect, useState } from "react";
import Karakter from "./Karakter";
import { Accordion } from "reactstrap";
import styled from "styled-components";

const Karakterler = (props) => {
  const { karakterler } = props;
  const StyMain = styled.div`
    width: 50%;
    margin: auto;
    margin-top: 2rem;
  `;
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    if (open == id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <StyMain>
      <Accordion open={open} toggle={toggle}>
        {karakterler.map((karakter, i) => (
          <Karakter key={i + 1} id={i + 1} karakter={karakter} />
        ))}
      </Accordion>
    </StyMain>
  );
};

export default Karakterler;
