const title = document.getElementById('title');
const ingredients = document.getElementById('ingredients');
const instructions = document.getElementById('instructions');
const cuisine = document.getElementById('cuisine');
const cardContainer = document.getElementById('card-container');
const addRecipe = document.querySelector('.add-Recipe');
const filterInput = document.getElementById('filter-input');
const filterButton = document.getElementById('filterData'); 


const addmodel = document.querySelector('.addmodel');
const editmodel = document.querySelector('.editmodel')

// Edit-Model
const editTitle = document.getElementById('edittitle');
const editIngredients = document.getElementById('editingredients');
const editInstructions = document.getElementById('editinstructions');
const editCuisine = document.getElementById('editcuisine');
const editRecipeBtn = document.querySelector('.editRecipeBtn')



let UpdateIndex = null; 

const Recipes = JSON.parse(localStorage.getItem('Recipe')) || [];

// Add a new recipe
addRecipe.addEventListener('click', () => {
    let data = JSON.parse(localStorage.getItem('Recipe')) || [];

    data.push({
        title: title.value,
        ingredients: ingredients.value,
        instructions: instructions.value,
        cuisine: cuisine.value,
    });

    localStorage.setItem('Recipe', JSON.stringify(data));
    displayRecipes(data);

    // Clear input fields
    title.value = "";
    ingredients.value = "";
    instructions.value = "";
    cuisine.value = "";
});

// displayRecipes from local storage
const displayRecipes = (Recipes) => {
    cardContainer.innerHTML = "";

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
                <button class="btn btn-primary" onclick="EditRecipe(${index})">Edit</button>
                <button class="btn btn-primary" onclick="DeleteRecipe(${index})">Remove</button>
            </div>
        </div>`;
        cardContainer.innerHTML += row;
    });
};

// Remove a recipe from the cart 
const DeleteRecipe = (index) => {
    const recipeData = JSON.parse(localStorage.getItem('Recipe')) || [];
    recipeData.splice(index, 1);
    localStorage.setItem('Recipe', JSON.stringify(recipeData));
    displayRecipes(recipeData);
};

const EditRecipe = (index) => {
    const recipeData = JSON.parse(localStorage.getItem('Recipe')) || [];
    const recipe = recipeData[index];

    // Populate input fields with existing data
    editTitle.value = recipe.title;
    editIngredients.value = recipe.ingredients;
    editInstructions.value = recipe.instructions;
    editCuisine.value = recipe.cuisine;

    // Set update index
    UpdateIndex = index;

    editmodel.style.display = 'block'
    addmodel.style.display = 'none'
};

editRecipeBtn.addEventListener('click', ()=>{
    const recipeData = JSON.parse(localStorage.getItem('Recipe'));
    recipeData[UpdateIndex] = {
        title : editTitle.value,
        ingredients : editIngredients.value,
        instructions : editInstructions.value,
        cuisine : editCuisine.value

    }
    
    localStorage.setItem('Recipe',JSON.stringify(recipeData))
    displayRecipes(recipeData);
    editmodel.style.display = 'none'
    addmodel.style.display = 'block'
})

// Filter Data
filterButton.addEventListener("click", ()=> {
    const recipeData = JSON.parse(localStorage.getItem('Recipe'));
    let filterRec = recipeData.filter((rec) => rec.title === filterInput.value)
    displayRecipes(filterRec);
})


displayRecipes(Recipes);
