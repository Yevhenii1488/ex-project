const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let recipes = [
    {
        id: 1,
        title: 'Борщ',
        description: 'Традиційний український борщ',
        ingredients: 'Буряк, капуста, картопля, морква, цибуля, томатний соус, м\'ясо',
        instructions: '1. Відварити м\'ясо до готовності.\n2. Додати нарізану картоплю, варити 10 хвилин.\n3. Додати нарізану капусту, варити ще 10 хвилин.\n4. Підсмажити моркву та цибулю, додати томатний соус і тушкувати кілька хвилин.\n5. Додати буряк і тушковану суміш до каструлі, варити ще 15 хвилин.'
    },
    {
        id: 2,
        title: 'Графські розвали',
        description: 'Смачний десерт з горіхами та безе',
        ingredients: 'Горіхи, безе, збиті вершки, шоколад',
        instructions: '1. Запекти безе до хрусткого стану.\n2. Змішати безе зі збитими вершками та горіхами.\n3. Полити розтопленим шоколадом перед подачею.'
    },
    {
        id: 3,
        title: 'М\'ясо по-французьки',
        description: 'Смажене м\'ясо з сиром та помідорами',
        ingredients: 'М\'ясо, сир, помідори, цибуля, майонез',
        instructions: '1. Нарізати м\'ясо на порційні шматки, відбити.\n2. Викласти м\'ясо на деко, посипати сіллю та перцем.\n3. На м\'ясо викласти нарізану цибулю та помідори.\n4. Зверху посипати тертим сиром та змазати майонезом.\n5. Запікати в духовці при 180°C 30-40 хвилин.'
    }
];

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');
    res.json(recipe);
});

app.post('/api/recipes', (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});