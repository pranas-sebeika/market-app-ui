import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {Image, Row, Col, Container, Button} from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import {getCoin} from "../../api/coinApi";
import SpinnerWrapper from "../../components/common/SpinnerWrapper";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const CoinPreview =  () => {
    const {id} = useParams();
    const {t} = useTranslation();
    const history = useHistory();

    const [coin, setCoin] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const loadCoins = () => {
        setIsLoading(true);
        getCoin(id)
            .then(response => {
                setCoin(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        loadCoins();
    }, [])

    return (
        <>
            <Button onClick={history.goBack}>
                <ArrowBackIosIcon/>
            </Button>
            {
                isLoading ?
                    (
                        <SpinnerWrapper/>
                    )

                    : (
                        <Container fluid>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <Image src={coin.reverse} fluid style={{width: "350px"}}/>
                                    <Image src={coin.obverse} fluid style={{width: "350px"}}/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <ul>
                                        <li>{t("coin.year")}: {coin.year}</li>
                                        <li>{t("coin.mintage")}: {coin.mintage}</li>
                                        <li>{t("coin.metal")}: {coin.metal}</li>
                                        <li>{t("coin.condition")}: {coin.condition}</li>
                                        <li>{t("coin.hallmark")}: {coin.hallmark}</li>
                                        <li>{t("coin.weight")}: {coin.weight} g.</li>
                                        <li>{t("coin.diameter")}: {coin.diameter} mm.</li>
                                        <li><p>{t("coin.description")}: {coin.description}</p></li>
                                        <h4>{t("coin.telephone")}: {coin.telephone}</h4>
                                        <h3><strong>{t("coin.price")}: {coin.price} €</strong></h3>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    )
            }
        </>)
}

export default CoinPreview

