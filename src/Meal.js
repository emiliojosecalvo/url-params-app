import React from 'react';
import { useParams } from 'react-router-dom';
import Drink from './Drink';
import Food from './Food';

export default function Meal() {
    const foodName = useParams().foodName;
    const drinkName = useParams().drinkName;
    console.log(useParams());
    return (
        <div>
            <Food foodName={foodName} />
            <Drink drinkName={drinkName} />
        </div>
    )
}
