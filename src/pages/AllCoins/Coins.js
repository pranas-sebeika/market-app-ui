import CoinTable from "./CoinTable";
import React, {useEffect, useState} from "react";
import {getAllCoins} from "../../api/coinApi";
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

    return (
        <>
            {
                isLoading ?
                    (
                        <Spinner/>

                    ):
                    (
                        <CoinTable
                            coins={coins}
                        />
                    )
            }
        </>
    )
}

export default Coins