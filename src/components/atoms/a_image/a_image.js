import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  styleImage: {
    // marginRight: "20px",
  },
  picture: {
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "0px",
    border: "0px solid #151717"
  },
}));

const Image = ({ image }) => { 
  const classes = useStyles();

  return (
      <div
        className={classes.picture}
        style={{ backgroundImage: "URL(" + image + ")" }}
      ></div>
   
  );
};

export default Image;
