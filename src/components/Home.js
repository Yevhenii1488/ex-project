import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const recipes = [
        {
            id: 1,
            title: 'Борщ',
            description: 'Традиційний український борщ',
            image: '/images/borscht.png'
        },
        {
            id: 2,
            title: 'Графські розвали',
            description: 'Смачний десерт з горіхами та безе',
            image: '/images/grafskie_razvaly.png'
        },
        {
            id: 3,
            title: 'М\'ясо по-французьки',
            description: 'Смажене м\'ясо з сиром та помідорами',
            image: '/images/french_meat.png'
        }
    ];

    return (
        <div className="container">
            <h1>Recipes</h1>
            <div className="row">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p className="card-text">{recipe.description}</p>
                                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">More details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;