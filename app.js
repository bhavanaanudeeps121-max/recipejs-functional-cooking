// Recipe Data Array
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    time: 25,
    difficulty: "easy",
    description: "Classic Italian pasta dish with eggs, cheese, and bacon. Quick and delicious!",
    category: "pasta"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    time: 45,
    difficulty: "medium",
    description: "Creamy and flavorful Indian curry with tender chicken pieces in spiced tomato sauce.",
    category: "curry"
  },
  {
    id: 3,
    title: "Caesar Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh romaine lettuce with parmesan cheese, croutons, and creamy Caesar dressing.",
    category: "salad"
  },
  {
    id: 4,
    title: "Beef Wellington",
    time: 90,
    difficulty: "hard",
    description: "Elegant beef tenderloin wrapped in mushroom duxelles and puff pastry. A showstopper!",
    category: "main"
  },
  {
    id: 5,
    title: "Pad Thai",
    time: 30,
    difficulty: "medium",
    description: "Popular Thai stir-fried noodles with shrimp, peanuts, and tangy tamarind sauce.",
    category: "pasta"
  },
  {
    id: 6,
    title: "Greek Salad",
    time: 10,
    difficulty: "easy",
    description: "Refreshing Mediterranean salad with tomatoes, cucumbers, olives, and feta cheese.",
    category: "salad"
  },
  {
    id: 7,
    title: "Coq au Vin",
    time: 75,
    difficulty: "hard",
    description: "French classic of chicken braised in red wine with mushrooms and pearl onions.",
    category: "main"
  },
  {
    id: 8,
    title: "Thai Green Curry",
    time: 35,
    difficulty: "medium",
    description: "Aromatic and spicy Thai curry with coconut milk, vegetables, and fresh herbs.",
    category: "curry"
  }
];

// DOM Selection
const recipeContainer = document.querySelector('#recipe-container');

// Create Recipe Card Function
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// Render Recipes Function
const renderRecipes = (recipesToRender) => {
  // Transform each recipe into HTML using createRecipeCard()
  const htmlStrings = recipesToRender.map(recipe => createRecipeCard(recipe));
  
  // Combine all HTML strings into one
  const combinedHTML = htmlStrings.join('');
  
  // Set the innerHTML of recipeContainer to the combined HTML
  recipeContainer.innerHTML = combinedHTML;
};
renderRecipes(recipes);