"use client"

import { useState } from "react"

export default function NewItem({onAddItem}) {

    const [quantity, setQuantity] = useState(1);

    const increment = (event) => {        
        
        event.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = (event) => {        
        
        event.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    let btnStyles = "bg-blue-600 text-white rounded px-4 py-2 m-2 hover:bg-blue-400 active:bg-yellow-500 disabled:bg-gray-400"

    let incrementDisable = false;
    let decrementDisable = false;

    if (quantity >= 20) {
        incrementDisable = true;
    }
    if (quantity <= 1) {
        decrementDisable = true;
    }


    const [name, setName] = useState("");
    const handleNameChange = (event) => setName(event.target.value);


    const [category, setCategory] = useState("produce");
    const handleCategoryChange = (event) => setCategory(event.target.value);
    
    //Random string function. Source: https://www.slingacademy.com/article/ways-to-generate-random-strings-in-javascript/
    const randomString = (length) => {
        let result = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        const charactersLength = chars.length;
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: randomString(17),
            name: name,
            quantity: quantity,
            category: category,
        }

        console.dir(item);

        // alert(`Added Item. 
        //     Name: ${name}
        //     Quantity: ${quantity}
        //     Category: ${category}
        // `);

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }


    return (
        <form onSubmit={handleSubmit} className="bg-slate-200 p-5">

            <h2 className="text-2xl ml-4 font-bold">Add Item</h2>

            <div className="bg-gray-300 inline-block p-3 mx-3 rounded-xl">
                <label>Name: </label>
                <input type="text" onChange={handleNameChange} value={name} required={true}></input>
            </div>

            <div className="bg-gray-300 inline-block p-3 mx-3 rounded-xl">
                <button onClick={decrement} className={btnStyles} disabled={decrementDisable}>-</button>
                <label className="mx-4 text-xl">{quantity}</label>
                <button onClick={increment} className={btnStyles} disabled={incrementDisable}>+</button>
            </div>

            <div className="bg-gray-300 inline-block p-3 mx-3 rounded-xl">
                <label>Category: </label>
                <select onChange={handleCategoryChange} value={category}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverage">Beverages</option>
                    <option value="snack">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="bg-gray-300 inline-block p-3 mx-3 rounded-xl">
                <button>Submit</button>
            </div>
        </form>
    );
}