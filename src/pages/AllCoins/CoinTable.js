import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import ItemCard from "./CoinCard";

function CoinTable({coins}) {

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {
                        coins.map(coin => (
                            <TableRow key={coin.id}>
                                <Link to={`/coins/${coin.id}`}>
                                    <TableCell>{coin.id}</TableCell>
                                    <ItemCard coin={coin}/>
                                </Link>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CoinTable