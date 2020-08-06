import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Input, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  styleInputFields: {
    marginRight: "20px",
  },
}));

const InputField = ({ value, onChange,ref }) => {
  const classes = useStyles();

  return (
    
      <Input data-testid="inputAtom" className={classes.styleInputFields}
        inputProps={{ "aria-label": "description" }}
        style={{ color: "#000" }}
        onChange={onChange}
        required
        inputProps={{ "data-testid": value }}
        
      />
  
  );
};

export default (InputField);
