import React from "react";
import { Toolbar, Typography, Grid, Box } from "@material-ui/core";
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
      <div className={classes.content}>
        <Toolbar>
          <Typography className={classes.title}></Typography>
          <Typography className={classes.title}></Typography>
          <Typography className={classes.title}>
            Secretaria Administrativa y Financiera
          </Typography>
          <Typography className={classes.name}></Typography>
          <Stack direction="row" spacing={1}>
            <LiveSearch />
            <MenuItem>
              <Badge badgeContent={10} color="primary">
                <IconBellNew />
              </Badge>
            </MenuItem>
            <Bill />
          </Stack>
        </Toolbar>
      </div>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>

        <Stack direction="row" spacing={1}>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <Typography variant="h6">La Dirección de Cultura, Turismo y Deportes a través ión conjunt lrperos 6 de et de misa, la romería al Santuario de la Virgen de Remedios, el concurso de la copla Tupiceña, y Culturales y Artísticas.</Typography>
        </Stack>
      </div>
    </>
  );
};
export default Header;
