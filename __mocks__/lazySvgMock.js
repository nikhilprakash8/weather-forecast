import React from "react";

const MyComponent = props => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" {...props}><rect x={10} y={10} height={100} width={100} style={{
  stroke: "#ff0000",
  fill: "#0000ff"
}} /></svg>;

export default MyComponent;
