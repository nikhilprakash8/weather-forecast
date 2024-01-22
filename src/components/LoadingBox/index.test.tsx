import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingBox } from ".";

describe("LoadingBox", () => {
  it("Should display loading label", () => {
    render(<LoadingBox smallWidth={true} color="#FF" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});