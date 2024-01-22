import React from "react";
import axios, { AxiosRequestConfig } from "axios";
import { screen, render } from "@testing-library/react";

import { WeatherForecast } from "./weather-forecast";

import { weather, city } from "./api/mockData";

const mockAxios = jest.spyOn(axios, "get");

describe("WeatherForecast", () => {
  it("should render the component", async () => {
    mockAxios.mockImplementation(
      (url: string, _config?: AxiosRequestConfig): Promise<unknown> => {
        if (url.match("https://api.openweathermap.org/geo/1.0/direct")) {
          return Promise.resolve({ data: city });
        } else {
          return Promise.resolve({ data: weather });
        }
      }
    );

    const date = "2020-01-01";
    const text = "01:00";

    render(
      <WeatherForecast
        contentLanguage="en_US"
        apikey="000"
        date={date}
        text={text}
        location={"Chemnitz"}
        fahrenheit={false}
      />
    );

    expect(await screen.findByText(/Chemnitz/)).toBeInTheDocument();
  });
});
