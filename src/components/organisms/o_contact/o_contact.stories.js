import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import ContactMainContent from "./o_contact";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: ContactMainContent,
  title: "organisms/o_contact",
  decorators: [withKnobs],
};
export const contactMainContent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <ContactMainContent />
    </ThemeProvider>
  );
};
