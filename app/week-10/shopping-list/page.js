"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context"
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";


export default function Page() {

    const [items, setItems] = useState([]);

    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (item) => {
        let itemId = addItem(user.uid, item);
        item.id = itemId;
        setItems([...items, item]);
    };
    
    const handleItemSelect = (itemName) => {
        let name = itemName;
        name = name.split(",")[0];
        name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        name = name.trim();

        setSelectedItemName(name);
    }

    const{user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    useUserAuth();

    async function loadItems() {
        try {
            let shoppingList = await Promise.resolve(getItems(user.uid)); //https://stackoverflow.com/questions/27759593/how-do-i-wait-for-a-promise-to-finish-before-returning-the-variable-of-a-functio
            setItems(shoppingList);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        if (user) {
            loadItems(user.uid);
        }
    }, [user, items]);

    return(
        <main>
            <h1 className="m-4 text-3xl font-bold">Shopping List</h1>
            { user ? (
                <div className="flex">
                    <div className="flex-1 max-w-sm m-2">
                        <NewItem onAddItem = {handleAddItem}></NewItem>
                        <ItemList items = {items} onItemSelect={handleItemSelect}></ItemList>
                    </div>
                    <div className="flex-1 max-w-sm m-2">
                        <MealIdeas ingredient={selectedItemName}></MealIdeas>
                    </div>
                </div>
            ) : (<div>
                <p>You must be logged in to view this page.</p>
                <Link href="/week-9">Click here to return to the Sign In page.</Link>
            </div>)}
        </main>
    );
}