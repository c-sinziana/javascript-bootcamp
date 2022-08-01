import React from "react";

const Cell = (props) => {
  return (
    <button
      className="tableLine"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.cell[props.position]}
    </button>
  );
};

export default Cell;
