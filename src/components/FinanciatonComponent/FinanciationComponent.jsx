import React from "react";
import TableComponent from "./TableComponent";
import { Grid } from "@material-ui/core";
import { useStyles } from "../LastDocuments/lastDocuments.styles";
import MenuComponent from "../MenuComponent/MenuComponent";
const FinanciationComponent= () => {
  const classes = useStyles();
  return (
    <>
    <MenuComponent/>
    <div className={classes.container}>
    <Grid className={classes.mainBlock}>
      <Grid className={classes.lastRow}>
        <TableComponent />
      </Grid>
    </Grid>
  </div></>
    
  );
};

export default FinanciationComponent;
