"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";


export default function Page() {

    const [items, setItems] = useState(itemData);

    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (item) => setItems([...items, item]);
    
    const handleItemSelect = (itemName) => {
        let name = itemName;
        name = name.split(",")[0];
        name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        name = name.trim();

        setSelectedItemName(name);
    }

    return(
        <main>
            <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem = {handleAddItem}></NewItem>
                    <ItemList items = {items} onItemSelect={handleItemSelect}></ItemList>
                </div>
                <div className="flex-1 max-w-sm m-2">
                    <MealIdeas ingredient={selectedItemName}></MealIdeas>
                </div>
            </div>
        </main>
    );
}