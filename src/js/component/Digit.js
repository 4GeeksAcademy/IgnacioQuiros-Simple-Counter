import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Digit = ({ Number, index }) => {

  return (
    <div className="col-1 d-flex justify-content-center border border-secondary rounded-2"
      style={{ aspectRatio: "4/5", background: "#353535", display: "flex", alignItems: "center", textAlign: "center", margin: "4px" }}>
      {/*Here I compare the index to put an icon in the first position*/}
      {index === 0 ? (
        <h2 className=" m-0">
          <FontAwesomeIcon className="text-light custom-icon m-0" icon={faClock} />
        </h2>
      ) : (
        <h1 className="text-light m-0" >{Number}</h1>
      )}
    </div>
  );
};

export default Digit;