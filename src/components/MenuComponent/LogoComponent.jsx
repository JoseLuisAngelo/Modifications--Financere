import React from 'react';
import {BootstrapButton, useStyles} from './menuComponent.styles'
import Logo from '../../assets/menuComponent/icon-logo';


function LogoComponent() {
    const classes= useStyles()
    return (
        <BootstrapButton className={classes.container}>
        <Logo/>
        <span className={classes.title}>Plagio Control</span>
    </BootstrapButton>
    );
}

export default LogoComponent;
