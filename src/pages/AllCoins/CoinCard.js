import React, {useState} from "react";
import "./CoinCard.css"
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";


const CoinCard = ({coin}) => {

    return (
        <>
            <Link to={`/coins/${coin.id}`}>
                <Container>
                    <div>
                        <img
                            alt={`Coin {coin.id}`}
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
export default CoinCard
