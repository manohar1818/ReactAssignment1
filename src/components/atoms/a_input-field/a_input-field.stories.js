import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import InputField from "./a_input-field";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: InputField,
  title: "atoms/a_input-field",
  decorators: [withKnobs],
};

export const inputField = () => {
  const value = text("value", "input123");
  return (
    <ThemeProvider theme={myTheme}>
      <InputField value={value} onChange={action()} />
    </ThemeProvider>
  );
};
