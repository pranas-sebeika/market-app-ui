import React from "react";
import {Row, Col, Container, Button} from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {useHistory} from "react-router-dom";


const ServerError = () => {
    const history = useHistory();

    return (
        <Container>
            <Button onClick={() => history.push("/coins")}>
                <ArrowBackIosIcon/>
            </Button>
            <Row className="justify-content-md-center">
                <h1><strong>You broke the internet</strong></h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <iframe src="https://giphy.com/embed/cdIdkfJ2IZCxi" title="Server Error" width="400" height="480" frameBorder="0" className="giphy-embed" allowFullScreen/>
                </Col>
            </Row>
        </Container>
    )
}

export default ServerError;
