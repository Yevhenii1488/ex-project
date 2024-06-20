import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = { title, description, ingredients, instructions };

        axios.post('http://localhost:3001/api/recipes', newRecipe)
            .then(response => {
                console.log(response.data);
                // Очищення форми після успішної відправки
                setTitle('');
                setDescription('');
                setIngredients('');
                setInstructions('');
            })
            .catch(error => {
                console.error('There was an error adding the recipe!', error);
            });
    };

    return (
        <div className="container">
            <h1>Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients</label>
                    <textarea
                        className="form-control"
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions</label>
                    <textarea
                        className="form-control"
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;