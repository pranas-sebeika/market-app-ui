import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";


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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const history = useHistory()
    const { t } = useTranslation()

    const newCoin = () => history.push("/coin/new")
    const {i18n} = useTranslation()
    const home = () => history.push("/coins")

    const changeLang = () => {
        if(i18n.language === "en-US") {
            i18n.changeLanguage("lt");
        } else {
            i18n.changeLanguage("en-US");
        }
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
            <MenuItem onClick={newCoin}>
                <IconButton aria-label="add new coin" color="inherit">
                        <AddCircleOutlineIcon/>
                </IconButton>
                <p>{t("button.addCoin")}</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show favorites" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <FavoriteIcon/>
                    </Badge>
                </IconButton>
                <p>{t("button.favorite")}</p>
            </MenuItem>
            <MenuItem onClick={changeLang}>
                <IconButton aria-label="show favorites" color="inherit">
                    {
                        i18n.language === "en-US" ? <span>🇱🇹</span> : <span>🇬🇧</span>
                    }
                </IconButton>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <MenuItem onClick={home}>
                        <IconButton>
                            <img className="logo" src={'./logo.png'} alt="Logo"/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <strong>YOUDSY</strong>
                        </Typography>
                    </MenuItem>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="add coin" color="inherit">
                            <AddCircleOutlineIcon onClick={newCoin}/>
                        </IconButton>
                        <IconButton aria-label="remembered coins" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <FavoriteIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" onClick={changeLang}>
                            {
                                i18n.language === "en-US" ? <span>🇱🇹</span> : <span>🇬🇧</span>
                            }
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
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
