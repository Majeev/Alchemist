import React from "react";
import './Ingredients.css'
import {useState} from "react";

type Ingredient = {
    name: string
    icon: string
}

interface Props {
    ingredients: Ingredient[]
}

const Ingredients = ({ingredients}: {ingredients:Props}) => {

    return (
        <div className='container'>
            {ingredients.map((ingredient: Ingredient,index: number) => {
                return (
                    <div className='box' key={index}>
                        {ingredient.name}
                        <img src={ingredient.icon} alt={ingredient.name}/>

                    </div>
                )
            })}
        </div>
    )

}

export default Ingredients