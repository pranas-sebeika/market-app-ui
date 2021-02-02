import {Spinner} from "react-bootstrap";
import React from "react";

export default () => (
    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
)
