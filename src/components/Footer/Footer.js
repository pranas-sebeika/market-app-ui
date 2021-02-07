import React from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";

const Footer = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <span color="inherit">
            Market App
        </span>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
)

export default Footer