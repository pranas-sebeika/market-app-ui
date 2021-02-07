import React, {useContext} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CoinCard from "./CoinCard";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Button from "@material-ui/core/Button";
import {UserContext} from "../../App";

function CoinTable({coins, deleteCoinHandler}) {
    const userContext = useContext(UserContext);

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {
                        coins.map(coin => (
                            <TableRow key={coin.id}>
                                <TableCell>
                                    { (userContext.user?.id === coin.owner) || (userContext.user?.roles.includes("ADMIN"))?
                                        (
                                            <Button onClick={() => deleteCoinHandler(coin.id)}>
                                                <RemoveCircleIcon color="secondary"/>
                                            </Button>
                                        ) :
                                        ("")
                                    }

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