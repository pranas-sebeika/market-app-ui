import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Redirect, useHistory, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from '../../assets/logo.png';
import {UserContext} from "../../App";


const useStyles = makeStyles((theme) => ({

    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const {i18n, t} = useTranslation()
    const userContext = useContext(UserContext)
    const history = useHistory()
    const newCoin = () => history.push("/coin/new")
    const handleMyCoins = () => history.push("/my/coins")
    const home = () => history.push("/coins")
    const handleLogIn = () => history.push("/login")

    const changeLang = () => {
        if (i18n.language === "en-US") {
            i18n.changeLanguage("lt");
        } else {
            i18n.changeLanguage("en-US");
        }
    }

    const handleLogout = () => {
        userContext.removeUser()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className="menu"
        >
            {
                !!userContext.user ? (
                    <MenuItem onClick={newCoin}>
                        <IconButton aria-label="add new coin" color="inherit">
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        <p>{t("button.addCoin")}</p>
                    </MenuItem>
                ) : ("")
            }
            {
                !!userContext.user ? (
                    <MenuItem onClick={handleMyCoins}>
                        <IconButton aria-label="show favorites" color="inherit">
                            <FolderSpecialIcon/>
                        </IconButton>
                        <p>{t("button.myCoins")}</p>
                    </MenuItem>

                ) : ("")
            }
            <MenuItem onClick={changeLang}>
                <IconButton aria-label="show favorites" color="inherit">
                    {
                        i18n.language === "en-US" ? <span>🇱🇹</span> : <span>🇬🇧</span>
                    }
                </IconButton>
            </MenuItem>
            <MenuItem>
                {
                    !!userContext.user ? (
                        <IconButton onClick={() => handleLogout()} edge="end" aria-label="login" color="inherit">
                            <ExitToAppIcon/>
                            <span>{t("button.logout")}</span>
                        </IconButton>
                    ) : (

                        <IconButton component={NavLink} to={"/login"} edge="end" aria-label="login" color="inherit">
                            <AccountCircle/>
                            {t("button.login")}
                        </IconButton>
                    )
                }
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <MenuItem onClick={home}>
                        <IconButton>
                            <img className="logo" src={logo} alt="Logo"/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <strong>YOUDSY</strong>
                        </Typography>
                    </MenuItem>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        {
                            !!userContext.user ? (
                                <>
                                    <IconButton onClick={newCoin} aria-label="add coin" color="inherit">
                                        <AddCircleOutlineIcon/>
                                    </IconButton>
                                    <IconButton onClick={handleMyCoins} aria-label="show my coins" color="inherit">
                                        <FolderSpecialIcon/>
                                    </IconButton>
                                </>
                            ) : ("")
                        }
                        <IconButton onClick={changeLang} color="inherit">
                            {i18n.language === "en-US" ? <span>🇱🇹</span> : <span>🇬🇧</span>}
                        </IconButton>
                        {
                            !!userContext.user ? (
                                <IconButton onClick={() => handleLogout()} edge="end" aria-label="login"
                                            color="inherit">
                                    <ExitToAppIcon/>
                                    <span>{t("button.logout")}</span>
                                </IconButton>
                            ) : (

                                <IconButton onClick={handleLogIn} edge="end" aria-label="login" color="inherit">
                                    <AccountCircle/>
                                    {t("button.login")}
                                </IconButton>
                            )
                        }

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
