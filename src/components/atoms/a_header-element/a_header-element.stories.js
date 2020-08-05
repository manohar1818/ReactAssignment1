import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import HeaderElement from "./a_header-element";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: HeaderElement,
  title: "atoms/a_header-element",
  decorators: [withKnobs],
};

export const headerElementt = ({hello}) => {
  //const text1 = text("text", "home");
  return (
  
      <HeaderElement text="hello" />
    
  );
};

