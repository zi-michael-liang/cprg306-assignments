"use client"

import { useState } from "react"

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
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

    return (
        <div className="bg-gray-300 inline-block p-3 rounded-xl">
            <button onClick={decrement} className={btnStyles} disabled={decrementDisable}>-</button>
            <label className="mx-4 text-xl">{quantity}</label>
            <button onClick={increment} className={btnStyles} disabled={incrementDisable}>+</button>
        </div>
    );
}