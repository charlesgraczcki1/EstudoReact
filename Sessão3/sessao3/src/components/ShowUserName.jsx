import React from "react";

const ShowUserName = (props) => {
  return (
    <div>
      <h2>
        o Zeka avisou que o {props.name} foi picado pelo {props.mordidopor} la
        na rua {props.rua}!
      </h2>
    </div>
  );
};

export default ShowUserName;
