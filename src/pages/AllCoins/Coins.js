import CoinTable from "./CoinTable";
import React, {useEffect, useState} from "react";
import {deleteCoin, getAllCoins} from "../../api/coinApi";
import Spinner from "../../components/common/Spinner";

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadCoins();
    }, [])

    const loadCoins = () => {
        setIsLoading(true);
        getAllCoins()
            .then(({data}) => {
                setCoins(data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const deleteCoinHandler = (id) => {
        setIsLoading(true);
        deleteCoin(id)
            .then(() => {
                loadCoins();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <>
            {
                isLoading ?
                    (
                        <Spinner/>

                    ):
                    (
                        <CoinTable
                            coins = {coins}
                            deleteCoinHandler = {deleteCoinHandler}
                        />
                    )
            }
        </>
    )
}

export default Coins