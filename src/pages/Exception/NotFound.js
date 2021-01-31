import React from "react";
import {Image, Row, Col, Container} from "react-bootstrap";
import {useLocation} from 'react-router-dom';


const NotFound = () => {
    const current = useLocation().pathname

    return (
        <Container>
            <Row className="justify-content-md-center">
                <h1><strong>Resource "{current}" not found</strong></h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Image src={"./noContent.gif"}/>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;
