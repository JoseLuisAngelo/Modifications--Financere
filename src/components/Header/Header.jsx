import React from "react";
import { Toolbar, Typography, Hidden, Paper } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import LiveSearch from "./LiveSearch";
import IconBellNew from "../../assets/headerComponent/icon-bell-new";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { useStyles } from "./header.styles";
import Bill from "./Bill";

const Header = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>

      <div className={classes.container}>
        
    
      
        <Hidden >
        
          <Paper className={classes.paper}><LiveSearch/>  <Badge badgeContent={10} color="primary">
                <IconBellNew />
              </Badge><Bill/></Paper>
          
        </Hidden>
     
      
      </div>
      <Toolbar>
       <h2> Secretaría Municipal Administrativa y Financiera</h2>
      </Toolbar>
    </div>
    {/*
      <div className={classes.content}>
        <Toolbar>
          <Typography className={classes.title}></Typography>
          <Typography className={classes.title}></Typography>
      
          <Typography className={classes.title}>
            Secretaria Administrativa y Financiera
          </Typography>
      
          <Typography className={classes.name}></Typography>
          <Hidden> <Stack direction="row" spacing={1}>
            <LiveSearch />
            <Paper className={classes.paper}>
              <Badge badgeContent={10} color="primary">
                <IconBellNew />
              </Badge>
            </Paper>
            <Hidden>  <Bill /></Hidden>
          </Stack></Hidden>
        </Toolbar>
      </div>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>

      
  </div>*/}
    </>
  );
};
export default Header;
