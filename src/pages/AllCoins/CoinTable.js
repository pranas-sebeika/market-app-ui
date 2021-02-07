import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as LinkTo} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import {UserContext} from "../../App";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    price: {
        textAlign: "center"
    }
}));

const CoinTable = ({coins, deleteCoinHandler}) => {
    const userContext = useContext(UserContext);
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <>
            <CssBaseline/>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {
                            coins.map(coin => (
                                <Grid item key={coin.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={coin.obverse}
                                                onMouseEnter={(e) =>  e.target.style.backgroundImage=`url(${coin.reverse})`}
                                                onMouseLeave={(e) => e.target.style.backgroundImage=`url(${coin.obverse})`}
                                                title="Image title"
                                                component={LinkTo}
                                                to={`/coins/${coin.id}`}
                                            />
                                        <CardContent className={classes.cardContent}>
                                            <Typography className={classes.price} gutterBottom variant="h5"
                                                        component="h2">
                                                <strong>{coin.price} EUR</strong>
                                            </Typography>
                                            <Typography>
                                                {coin.title}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" component={LinkTo}
                                                    to={`/coins/${coin.id}`}>
                                                {t("button.view")}
                                            </Button>
                                            {(userContext.user?.id === coin.owner) || (userContext.user?.roles.includes("ADMIN")) ?
                                                (
                                                    <Button size="small"
                                                            variant="contained"
                                                            color="secondary"
                                                            className={classes.button}
                                                            startIcon={<DeleteIcon />}
                                                            onClick={() => deleteCoinHandler(coin.id)}>
                                                        {t("button.delete")}
                                                    </Button>
                                                ) :
                                                ("")
                                            }
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default CoinTable
