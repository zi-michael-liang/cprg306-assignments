"use client"

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        try{
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        loadMealIdeas();        
    }, [ingredient])

    return(
        <div>
            <h2 className="text-2xl ml-4 font-bold">Meal Ideas for {ingredient}:</h2>
            <ul>
                {
                    Array.from(meals).map((idea) => 
                    <li key={idea.idMeal} className="m-3 p-2 max-w-sm bg-blue-50 border border-blue-950 rounded">
                        <h3 className="text-lg font-semibold">{idea.strMeal}</h3>
                        <img src={idea.strMealThumb} className="max-w-44"></img>
                    </li>)
                }
            </ul>
        </div>
    )    
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );        
        const data = await response.json();
        if (data.meals == null) return [];
        return data.meals;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}