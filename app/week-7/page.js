"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(itemData);

    const handleAddItem = (item) => setItems([...items, item]);

    return(
        <main>
            <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}></NewItem>
            <ItemList items = {items}></ItemList>
        </main>
    );
}