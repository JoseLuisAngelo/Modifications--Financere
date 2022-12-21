import React from 'react';
import {BootstrapButton, useStyles} from './menuComponent.styles'
import Logo from '../../assets/menuComponent/icon-logo';
import Avatar from "@mui/material/Avatar";

function LogoComponent() {
    const classes= useStyles()
    return (
        <BootstrapButton>
            <Avatar>  
            <img src='/images/logo.png' alt='Avatar' />    
          </Avatar>
        
        <span className={classes.titlebuton}>Modificación Presupuestaria</span>
    </BootstrapButton>
    );
}

export default LogoComponent;
