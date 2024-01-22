/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    location: {
      type: "string",
      title: "Location",
    },
    date: {
      type: "string",
      title: "Forecast Date",
    },
    text: {
      type: "string",
      title: "Additional text",
    },
    apikey: {
      type: "string",
      title: "openweathermap.org API Key",
    },
    fahrenheit: {
      type: "boolean",
      title: "Prefer Fahrenheit",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  location: {
    "ui:help":
      "Specify the displayed weather by city, state, or country. You might use a country identifier to narrow down the result (i.E. Chemnitz,DE).",
  },
  date: {
    "ui:help":
      "Enter a date to get a weather forecast. Leave empty to show the current weather information.",
    "ui:widget": "date",
  },
  text: {
    "ui:help": "Additional text to display on card.",
  },
  apikey: {
    "ui:help":
      "Enter a valid openweathermap.org API key. The key is used to retrieve data from the service.",
  },
};
