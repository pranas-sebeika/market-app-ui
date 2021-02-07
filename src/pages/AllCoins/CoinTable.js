import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CoinCard from "./CoinCard";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Button from "@material-ui/core/Button";

function CoinTable({coins, deleteCoinHandler}) {

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {
                        coins.map(coin => (
                            <TableRow>
                                <TableCell>
                                    <Button onClick={() => deleteCoinHandler(coin.id)}>
                                        <RemoveCircleIcon color="secondary"/>
                                    </Button>
                                    <CoinCard coin={coin}/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CoinTable