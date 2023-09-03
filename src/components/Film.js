import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

export default function Film(props) {
  const { filmId, filmName } = props;
  return (
    <div className="main-div">
      <AccordionItem className="mt-2" key={`accordion-item-${filmId}`}>
        <AccordionHeader targetId={filmId.toString()}>
          <div>{filmName}</div>
        </AccordionHeader>
        <AccordionBody accordionId={filmId.toString()}>
          <div>'Hello World'</div>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}
