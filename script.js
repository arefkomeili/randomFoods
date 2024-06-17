document.addEventListener("DOMContentLoaded", function() {
    const fetchRecipe = (id) => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('recipe-name').innerText = data.name;
                document.getElementById('recipe-image').src = data.image;
                document.getElementById('cuisine').innerText = data.cuisine;
                document.getElementById('author').innerText = `by User ${data.userId}`;
                document.getElementById('prep-time').innerText = `Prep Time: ${data.prepTimeMinutes} min`;
                document.getElementById('rating').innerText = `Rating: ★ ${data.rating}`;

                const ingredientsList = document.getElementById('ingredients');
                ingredientsList.innerHTML = '';
                data.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.innerText = ingredient;
                    ingredientsList.appendChild(li);
                });

                const instructionsList = document.getElementById('instructions');
                instructionsList.innerHTML = '';
                data.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.innerText = instruction;
                    instructionsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching recipe:', error));
    };

    document.getElementById('random-recipe-btn').addEventListener('click', () => {
        const randomId = Math.floor(Math.random() * 50) + 1;
        fetchRecipe(randomId);
    });

    // Fetch an initial recipe
    fetchRecipe(2);
});
