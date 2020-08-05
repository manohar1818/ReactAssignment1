import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Header from "./o_header";
import { myTheme } from "../../../theme";
import { BrowserRouter } from "react-router-dom";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: Header,
  title: "organisms/o_header",
  decorators: [withKnobs],
};
export const header = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        {" "}
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
};
