import React, { FunctionComponent } from "react";
import CSS from "csstype";

export interface CardProperties {
  color: string;
  smallWidth: boolean;
}

export const Card: FunctionComponent<CardProperties> = (props) => {
  const cardStyle: CSS.Properties = {
    display: "block",
    color: "white",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.15)",
    borderRadius: "0.5rem",
    overflow: "hidden",
    height: props.smallWidth ? "9rem" : "8.75rem",//11rem -> 8rem
    fontFamily: "Open Sans",
    fontStyle: "normal",
    position: "relative",
    backgroundColor: props.color,
  };

  return <div style={cardStyle}>{props.children}</div>;
};