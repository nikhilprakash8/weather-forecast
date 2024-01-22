import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherCard } from ".";

describe("WeatherCard", () => {
  it("Should convert the given temperature from Kelvin to Celsius and Fahrenheit", () => {
    const givenTemperature = 282.58;

    render(
      <WeatherCard
        color="#FF"
        temperature={givenTemperature}
        smallWidth={true}
        fahrenheit={false}
      />
    );

    expect(screen.getByText("9° C")).toBeInTheDocument();
    expect(screen.getByText("49° F")).toBeInTheDocument();
  });

  it("Should display the given information", () => {
    render(
      <WeatherCard
        color="#FF"
        date="Blue Monday"
        text="After Dinner"
        location="Chemnitz"
        smallWidth={true}
        fahrenheit={false}
      />
    );

    expect(screen.getByText("After Dinner · Chemnitz")).toBeInTheDocument();
    expect(screen.getByText("Blue Monday")).toBeInTheDocument();
  });
});