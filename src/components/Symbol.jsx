import React from "react";
// props.symbol

const Symbol = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {props.symbol}
    </div>
  );
};

export default Symbol;
