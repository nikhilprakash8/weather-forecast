import React from "react";
import ReactDOM from "react-dom";

import {
  BlockFactory,
  BlockDefinition,
  ExternalBlockDefinition,
  BaseBlock,
} from "widget-sdk";
import { WeatherForecastProps, WeatherForecast } from "./weather-forecast";
import { configurationSchema, uiSchema } from "./configuration-schema";
import pkg from "../package.json";
import icon from "../resources/weather-forecast.svg";

/**
 * This factory creates the class which is registered with the tagname in the `custom element registry`
 * Gets the parental class and a set of helper utilities provided by the hosting application.
 */
const factory: BlockFactory = (BaseBlockClass, _widgetApi) => {
  return class WeatherForecastBlock
    extends BaseBlockClass
    implements BaseBlock
  {
    public constructor() {
      super();
    }

    private get props(): WeatherForecastProps {
      const attrs = this.parseAttributes<WeatherForecastProps>();
      return {
        ...attrs,
        contentLanguage: this.contentLanguage,
      };
    }

    public renderBlock(container: HTMLElement): void {
      ReactDOM.render(<WeatherForecast {...this.props} />, container);
    }

    /**
     * The observed attributes, where the widgets reacts on.
     */
    public static get observedAttributes(): string[] {
      return ["location", "date", "text", "apikey", "fahrenheit"];
    }

    /**
     * Callback invoked on every change of an observed attribute. Call the parental method before
     * applying own logic.
     */
    public attributeChangedCallback(
      ...args: [string, string | undefined, string | undefined]
    ): void {
      super.attributeChangedCallback.apply(this, args);
    }
  };
};

/**
 * The definition of the block, to let it successful register to the hosting application
 */
const blockDefinition: BlockDefinition = {
  name: "weather-forecast",
  factory: factory,
  attributes: ["location", "date", "text", "apikey", "fahrenheit"],
  blockLevel: "block",
  configurationSchema: configurationSchema,
  uiSchema: uiSchema,
  label: "Weather",
  iconUrl: 'https://icon-library.com/images/icon-for-weather/icon-for-weather-27.jpg',
};

/**
 * Wrapping definition, which defines meta information about the block.
 */
const externalBlockDefinition: ExternalBlockDefinition = {
  blockDefinition,
  author: pkg.author,
  version: pkg.version,
};

/**
 * This call is mandatory to register the block in the hosting application.
 */
window.defineBlock(externalBlockDefinition);
