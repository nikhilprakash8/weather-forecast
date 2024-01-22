import React, { Suspense } from "react";
import CSS from "csstype";

import { WeatherIcon } from "api/weatherIcon";

export interface WeatherGraphicProperties {
  size?: number;
  icon?: WeatherIcon;
  marginLeft?: string;
  alignSelf?: string;
}

export const WeatherGraphic: React.FC<WeatherGraphicProperties> = (props) => {
  const weatherIconStyle: CSS.Properties = {
    ...(props.marginLeft && { marginLeft: props.marginLeft }),
    ...(props.alignSelf && { alignSelf: props.alignSelf }),
    height: "5rem",
    filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.2))",
  };

  /* let icon: JSX.Element; */
  const size = `${props.size ? props.size : 48}px`;

  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
  };

  const Icon = React.lazy(() => import(`./icons/${props.icon}.svg`));

  return (
    <Suspense fallback={<>{}</>}>
      <div style={weatherIconStyle}>
        <Icon {...iconProps} />
      </div>
    </Suspense>
  );
};