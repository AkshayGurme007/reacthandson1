import React from "react";
import { useState } from "react";
import ClassComp from "./ClassComp";
import FunctionalComp from "./FunctionalComp";
import "./style.css";

const Preview = () => {
  const [funct, setfunct] = useState(false);
  const [comp, setcomp] = useState(false);

  return (
    <>
      <h1 className="head">Styling using Functional and Class Component</h1>
      <button
        className="button1"
        onClick={() => (funct ? setfunct(false) : setfunct(true))}
      >
        To see styling in Functional Component
      </button>
      <button
        className="button2"
        onClick={() => (comp ? setcomp(false) : setcomp(true))}
      >
        To see styling in Classcomponent
      </button>
      {comp && <ClassComp />}
      {funct && <FunctionalComp />}
    </>
  );
};
export default Preview;
