import React from "react";
import CSS from "csstype";

import { Card } from "../Card";

export interface ErrorCardProperties {
  error: Error;
  color: string;
  smallWidth: boolean;
}

export const ErrorBox: React.FC<ErrorCardProperties> = (props) => {
  const cardErrorStyle: CSS.Properties = {
    display: "block",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    right: "0",
    textAlign: "center",
    verticalAlign: "middle",
    backdropFilter: "blur(10px)",
  };

  const cardErrorContentStyle: CSS.Properties = {
    color: "white",
    position: "relative",
    padding: "2rem",
    fontSize: "1rem",
    lineHeight: "1.2rem",
    fontWeight: "bold",
  };

  return (
    <Card color={props.color} smallWidth={props.smallWidth}>
      <div style={cardErrorStyle}>
        <div style={cardErrorContentStyle}>{props.error.message}</div>
      </div>
    </Card>
  );
};