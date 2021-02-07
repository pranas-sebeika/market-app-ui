import React from "react";
import "./CoinCard.css"
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";


export default ({coin}) => {

    return (
        <>
            <Link to={`/coins/${coin.id}`}>
                <Container>
                    <div>
                        <img
                            src={coin.obverse}
                            onMouseOver={e => (e.currentTarget.src = coin.reverse)}
                            onMouseLeave={e => (e.currentTarget.src = coin.obverse)}
                        />
                    </div>
                    <span>{coin.title}</span>
                    <strong>{coin.price} EUR</strong>
                </Container>

            </Link>
        </>

    )
}
