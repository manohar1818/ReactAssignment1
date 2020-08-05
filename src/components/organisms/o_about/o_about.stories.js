import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import AboutMainContent from "./o_about";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: AboutMainContent,
  title: "organisms/o_about",
  decorators: [withKnobs],
};
export const contactMainContent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <AboutMainContent />
    </ThemeProvider>
  );
};
