import React from "react";
import { Button, Box, Grid, Paper, Popover } from "@material-ui/core/";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import { useStyles } from "./header.styles";
const Bill  = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const classes = useStyles();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const perfilpas= (props) =>{

    sessionStorage.clear()
    window.location.href=`/perfilpas`
  }
  const salir= () =>{

    sessionStorage.clear()
    window.location.href="/"
  }
  //navbar

  return (
    <>
      <Button color="default" onClick={handleToggle} ref={anchorRef} >
     <h6 className={classes.name}>Jose Luis Angelo Huanca</h6> 
        <Avatar className={classes.avatar}/>
      </Button>

      <Popper open={open} color="contained" anchorEl={anchorRef.current}>
        <Paper >
          <ClickAwayListener onClickAway={handleClose}>
            <ButtonGroup
              orientation="vertical"
              color="contained"
              variant="contained"
            >
            <Button variant="text" onClick={() =>perfilpas()}>
                
                Perfil
              
            </Button>
             
           
              <Button variant="text" onClick={() =>salir()}>
                
                  Cerrar Sesion
                
              </Button>
              
            </ButtonGroup>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};
export default Bill;