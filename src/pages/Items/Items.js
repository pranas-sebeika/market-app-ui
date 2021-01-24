import ItemsTable from "./ItemsTable";
import React from "react";

const items =
    [
        {
            "id": 1,
            "image": "product1",
            "description": "abc"
        },
        {
            "id": 2,
            "image": "product2",
            "description": "abc"
        }
    ]


const Items = () => {

    return (
        <>
            {
                <ItemsTable
                    items={items}
                />
            }
        </>
    )
}

export default Items