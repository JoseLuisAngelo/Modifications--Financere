import React from "react";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import IconOverview from "../../assets/menuComponent/icon-overview.js";
import IconTickets from "../../assets/menuComponent/icon-tickets.js";
import IconIdeas from "../../assets/menuComponent/icon-ideas.js";
import IconContacts from "../../assets/menuComponent/icon-contacts";
import IconAgents from "../../assets/menuComponent/icon-agents";
import IconArticles from "../../assets/menuComponent/icon-articles";
import { Typography, Grid} from "@mui/material";
import IconSettings from "../../assets/menuComponent/icon-settings";
import { useStyles } from "./menuComponent.styles";
import { slide as Menu } from "react-burger-menu";
import useMenuComponent from "./useMenuComponent";

import Header from '../Header/Header'

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: 26,
    height: 20,
    left: 24,
    top: 20,
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    display: "none",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: 255,
  },
  bmMenu: {
    background: "#0F07B2",
  },
  bmItem: {
    outline: "none",
    ":focus": {
      outline: "none",
    },
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const MenuComponent = () => {
  const classes = useStyles();
  const {
    isOpen,
    isActive,
    onMenuItemClicked,
  } = useMenuComponent({ defaultPath: "/" });

  const isMobile = window.innerWidth <= 1080;
  const programas  = () => {
  
    window.location.href='/programas'
     }
     const financiation  = () => {
  
      window.location.href='/financiation'
       }
  return (
    <>
    <Menu
      isOpen={!isMobile || isOpen}
      noOverlay={!isMobile}
      disableCloseOnEsc
      styles={styles}
    >
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <LogoComponent />
      </div>

      <MenuItemComponent
        title="Programas"
        icon={IconOverview}
        onClick={() => programas(onMenuItemClicked("/programas") )}
        active={isActive("/programas")}
      />
      <MenuItemComponent
        title="Financiamiento"
        icon={IconTickets}
        onClick={() => financiation(onMenuItemClicked("/tickets"))}
        active={isActive("/tickets")}
      />
      <MenuItemComponent
        title="Unidad Solicitante"
        icon={IconIdeas}
        onClick={() => onMenuItemClicked("/ideas", { isCollapsible: true })}
        active={isActive("/ideas")}
      />
      {/* <MenuItemComponent
        title="Listar Tesis"
        icon={IconContacts}
        onClick={() => onMenuItemClicked("/contacts")}
        active={isActive("/contacts")}
      />
      <MenuItemComponent
        title="Publicar Tesis"
        icon={IconAgents}
        onClick={() => onMenuItemClicked("/agents")}
        active={isActive("/agents")}
      />
      <MenuItemComponent
        title="Reportes Generales"
        icon={IconArticles}
        onClick={() => onMenuItemClicked("/articles")}
        active={isActive("/articles")}
      /> */}
      <div className={classes.separator}></div>
      <MenuItemComponent
        title="Configuración"
        icon={IconSettings}
        onClick={() => onMenuItemClicked("/settings")}
        active={isActive("/settings")}
      />
    </Menu>
    <Header/>
    
    </>
  );
};

export default MenuComponent;
