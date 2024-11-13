"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {

    let sortedItems = [...items];

    const [sortBy, setSortBy] = useState("name");

    const sortByName = () => setSortBy("name");
    const sortByCategory = () => setSortBy("category");

    if (sortBy == "name") sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy == "category") sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));

    let btnStyles = "bg-blue-600 text-white rounded px-4 py-2 m-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-yellow-400"

    return(
        <div>
            <button onClick={sortByName} className={btnStyles} disabled={sortBy == "name"}>Sort by Name</button>
            <button onClick={sortByCategory} className={btnStyles} disabled={sortBy == "category"}>Sort by Category</button>
            <ul>
                {sortedItems.map((item) => <Item ItemObj={item} key={item.id} onSelect={onItemSelect}></Item>)}
            </ul>
        </div>
    );
}