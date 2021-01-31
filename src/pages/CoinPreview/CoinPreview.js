import React from 'react';
import {useParams} from "react-router-dom";
import {Image, Row, Col, Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const coinDetails =
    {
        "id": 1,
        "img_reverse": "/uploads/1936-vytautas-didysis-a.jpg",
        "img_obverse": "/uploads/1936-vytautas-didysis-b.jpg",
        "title": "Vytautas Didysis, 10 litų, 1936, Lietuva, sidabras",
        "condition": "VF/XF",
        "mintage": "720 000",
        "metal": "Silver (Ag)",
        "hallmark": ".750",
        "weight": "0.18",
        "diameter": "32.2",
        "year": "1938",
        "description": "Vytautas Didysis, 10 litų, 1936, Lietuva, sidabras\n" +
            "Aversas: Lietuvos Didysis kunigaikštis Vytautas Didysis apink jį užrašas: * VYTAUTAS DIDYSIS * 10 DEŠIMTS LITŲ 10 *\n" +
            "Reversas: Valstybės herbas – Vytis, žemiau jo užrašas „LIETUVA“ po juo nukaldinimo metai 1936.\n" +
            "Briauna: „TAUTOS * JĖGA * VIENYBĖJE *“\n",
        "price": "35",
        "telephone": "81231231"
    }


export default () => {
    const {id} = useParams();
    const { t } = useTranslation();

    return (

        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Image src={coinDetails.img_reverse} fluid style={{width: "350px"}}/>
                    <Image src={coinDetails.img_obverse} fluid style={{width: "350px"}}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <ul>
                        <li>{t("coin.year")}: {coinDetails.year}</li>
                        <li>{t("coin.mintage")}: {coinDetails.mintage}</li>
                        <li>{t("coin.metal")}: {coinDetails.metal}</li>
                        <li>{t("coin.condition")}: {coinDetails.condition}</li>
                        <li>{t("coin.hallmark")}: {coinDetails.hallmark}</li>
                        <li>{t("coin.weight")}: {coinDetails.weight} g.</li>
                        <li>{t("coin.diameter")}: {coinDetails.diameter} mm.</li>
                        <li><p>{t("coin.description")}: {coinDetails.description}</p></li>
                        <h4>{t("coin.telephone")}: {coinDetails.telephone}</h4>
                        <h3><strong>{t("coin.price")}: {coinDetails.price} €</strong></h3>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

