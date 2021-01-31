import React from "react";
import TableCell from "@material-ui/core/TableCell";
import "./CoinCard.css"

export default ({coin}) => {

    return (
        <>
            <TableCell>
                <img src={coin.img_reverse} alt="Image"/>
            </TableCell>
            <TableCell>{coin.title}</TableCell>
            <TableCell>
                <strong>{coin.price} EUR</strong>
            </TableCell>
        </>

    )
}