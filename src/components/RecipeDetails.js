import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        console.log(`Fetching recipe with id: ${id}`);
        axios.get(`http://localhost:3001/api/recipes/${id}`)
            .then(response => {
                console.log('Recipe data:', response.data);
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the recipe!', error);
            });
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetails;