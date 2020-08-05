import React from "react";
import { ThemeProvider } from "@material-ui/core";
// import { w object, text, select } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import EditImageForm from "./m_edit-image-form";
import { myTheme } from "../../../theme";
import {withKnobs,boolean,text} from "@storybook/addon-knobs/react"
export default {
  component: EditImageForm,
  title: "molecules/m_edit-image-form",
   decorators: [withKnobs],
};
export const editImageForm = () => {
  const name = text("name", "image1");
  const nameError=text("nameError","");
  return (
     
    <ThemeProvider theme={myTheme}>      
      <EditImageForm  name ={name} handleChangeInName={action()} handleSubmit ={action()} nameError={nameError}/>
    </ThemeProvider>
  );
};