import React from 'react';
import { useParams } from 'react-router-dom';

function Food() {
    const foodName = useParams().foodName;
    console.log(this.history)
    const url = `https://source.unsplash.com/1600x900/?${foodName}`;
    return (
        <div>
            <h1>This is : {foodName}</h1>
            <img style={{ width: '50%' }} src={url} alt={foodName} />
        </div>
    )
}

export default Food;
