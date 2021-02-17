import React from 'react'
import './Recipe.css'

const Recipe  = ({title,calories,image,ingredients})=>{
    return(
        <div className="item">
            <h1 className="space">{title}</h1>
            <h3 className="space">Calories : {calories}</h3>
            <h1 className="space">Ingredient</h1>
            <div>
                {
                    ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))
                }
            </div>
            <img src={image} alt="img" className="food_img"/> 
        </div>
    )
}
export default Recipe;