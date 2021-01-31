import CoinTable from "./CoinTable";
import React, {useEffect, useState} from "react";
import {getAllCoins} from "../../api/coinApi";

const Coins = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadCoins();
    }, [])

    const loadCoins = () => {
        setIsLoading(true);
        getAllCoins()
            .then(response => {
                setCoins(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (



        <>
            {
                <CoinTable
                    coins={coins}
                />
            }
        </>
    )
}

export default Coins