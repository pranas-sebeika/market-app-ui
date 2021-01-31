import React from 'react';
import {useParams} from "react-router-dom";
import {Image, Row, Col, Container} from "react-bootstrap";

const coinPreview =
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


export default function Item() {
    const {id} = useParams()

    return (

        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Image src={coinPreview.img_reverse} fluid style={{width: "350px"}}/>
                    <Image src={coinPreview.img_obverse} fluid style={{width: "350px"}}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <ul>
                        <li>Year: {coinPreview.year}</li>
                        <li>Mintage: {coinPreview.mintage}</li>
                        <li>Metal: {coinPreview.metal}</li>
                        <li>Condition: {coinPreview.condition}</li>
                        <li>Hallmark: {coinPreview.hallmark}</li>
                        <li>Weight: {coinPreview.weight} g.</li>
                        <li>Diameter: {coinPreview.diameter} mm.</li>
                        <li><p>Description: {coinPreview.description}</p></li>
                        <h4>Telephone: {coinPreview.telephone}</h4>
                        <h3><strong>Price: {coinPreview.price} €</strong></h3>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

