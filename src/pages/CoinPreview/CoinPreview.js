import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Image, Row, Col, Container} from "react-bootstrap";
import {useTranslation} from 'react-i18next';
import {getCoin} from "../../api/coinApi";
import Spinner from "../../components/common/Spinner";


export default () => {
    const {id} = useParams();
    const {t} = useTranslation();

    const [coin, setCoin] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadCoins();
    }, [])

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


    return (
        <>
            {
                isLoading ?
                    (
                        <Spinner/>
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

