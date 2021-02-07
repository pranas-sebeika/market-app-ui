import React, {useEffect, useState} from "react";
import {deleteCoin, getUserCoins} from "../../api/coinApi";
import SpinnerWrapper from "../../components/common/SpinnerWrapper";
import CoinTable from "./CoinTable";

const MyCoins = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadMyCoins();
    }, [])

    const loadMyCoins = () => {
        setIsLoading(true);
        getUserCoins()
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
                loadMyCoins();
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
                        <SpinnerWrapper/>

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

export default MyCoins