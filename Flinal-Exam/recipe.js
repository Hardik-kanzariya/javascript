// DOM Elements
const title = document.getElementById('title');
const ingredients = document.getElementById('ingredients');
const instructions = document.getElementById('instructions');
const cuisine = document.getElementById('cuisine');
const cartCount = document.getElementById('cart-counter');
const cardContainer = document.getElementById('card-container');
const cartContainer = document.getElementById('cart-container');
const addReciept = document.querySelector('.add-Recipe');
const filterInput = document.getElementById('filter-input');


let UpdateIndex = null; 

// Add a new recipe
addReciept.addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('Recipe')) || [];

    data.push({
        title: title.value,
        ingredients: ingredients.value,
        instructions: instructions.value,
        cuisine: cuisine.value,
    });

    localStorage.setItem('Recipe', JSON.stringify(data));
    loadData();

    // Clear input fields
    title.value = "";
    ingredients.value = "";
    instructions.value = "";
    cuisine.value = "";
});

// Load recipes from local storage
const loadData = () => {
    cardContainer.innerHTML = "";
    const Recipes = JSON.parse(localStorage.getItem('Recipe')) || [];
    // cartCount.textContent = cartCounter;

    Recipes.forEach((rec, index) => {
        const row = `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Title: ${rec.title}</h5>
                <p class="card-text">
                    <strong>Ingredients:</strong> ${rec.ingredients}<br/>
                    <strong>Instructions:</strong> ${rec.instructions}<br/>
                    <strong>Cuisine:</strong> ${rec.cuisine}<br/>
                </p>
                <button class="btn btn-primary" onclick="EditRecipt(${index})">Edit</button>
                <button class="btn btn-primary" onclick="DeleteRecipt(${index})">Remove</button>
            </div>
        </div>`;
        cardContainer.innerHTML += row;
    });
};

// Remove a recipe from the cart
const DeleteRecipt = (index) => {
    const recipeData = JSON.parse(localStorage.getItem('Recipe')) || [];
    recipeData.splice(index, 1);
    localStorage.setItem('Recipe', JSON.stringify(recipeData));
    loadData();
};

const EditRecipt = (index) => {
    const recipeData = JSON.parse(localStorage.getItem('Recipe')) || [];
    const recipe = recipeData[index];

    // Populate input fields with existing data
    title.value = recipe.title;
    ingredients.value = recipe.ingredients;
    instructions.value = recipe.instructions;
    cuisine.value = recipe.cuisine;

    // Set update index
    UpdateIndex = index;
    loadData()
};




loadData();
