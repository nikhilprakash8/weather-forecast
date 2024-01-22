import React, { useState, FunctionComponent } from "react";
import { WeatherIcon } from "api/weatherIcon";
import { InfoBox } from "../InfoBox";
import { ContentBox } from "../ContentBox";
import { Card } from "../Card";

/**
 * React Component
 */
export interface WeatherCardProperties {
  color: string;
  location?: string;
  date?: string;
  text?: string;
  temperature?: number;
  icon?: WeatherIcon;
  smallWidth: boolean;
  fahrenheit: boolean;
}

export const WeatherCard: FunctionComponent<WeatherCardProperties> = (
  props
) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  const onInfoBtnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDisplayInfo(!displayInfo);
  };

  const offsetToKelvin = 273.15;
  const temp = props.temperature ?? offsetToKelvin;
  let alternateTemperature =
    ((temp - offsetToKelvin) * (9 / 5) + 32).toFixed(0) + "° F";
  let temperature = (temp - offsetToKelvin).toFixed(0) + "° C";

  if (props.fahrenheit) {
    const value = temperature;
    temperature = alternateTemperature;
    alternateTemperature = value;
  }

  return (
    <Card color={props.color} smallWidth={props.smallWidth}>
      <ContentBox
        {...props}
        onInfoButtonClick={onInfoBtnClick}
        temperature={temperature}
        alternateTemperature={alternateTemperature}
      />
      {displayInfo && <InfoBox onCloseClick={onInfoBtnClick} />}
    </Card>
  );
};