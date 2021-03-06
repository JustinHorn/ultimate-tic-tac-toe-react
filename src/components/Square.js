import React from "react";

export const squareColors = {
  X: "#fc7341",
  O: "#2db2e2",
  WINNER_X: "#ffccb5",
  WINNER_O: "#dbf5ff",
  DRAW: "#F0F8FF",
  CLICKABLE: "#e2ffec",
};

export default function Square(props) {
  var style = { display: "inline-block" };
  if (props.value) {
    style.color = props.value === "X" ? squareColors.X : squareColors.O;
  }
  if (props.winner) {
    if (props.winner === "X") {
      style.background = squareColors.WINNER_X;
    } else if (props.winner === "O") {
      style.background = squareColors.WINNER_O;
    } else {
      style.background = squareColors.DRAW;
    }
  }
  if (props.clickable) {
    style.background = squareColors.CLICKABLE;
  }
  return (
    <button
      className="square"
      style={style}
      onClick={() => {
        if (props.clickable) {
          props.onClick();
        }
      }}
    >
      {props.value}
    </button>
  );
}

let lastId = 0;

const uniqueid = (prefix = "id") => {
  return `${lastId++}`;
};
