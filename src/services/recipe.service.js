export const recipeService = {
    getRecipes,
    add,
    remove,
}

// relative path not working
// const jsonPath = '../data/recipes.json'
const jsonPath = '/src/data/recipes.json'


function readRecipes() {
    return fetch(jsonPath)
        .then(response => response.json())
        .catch(error => {
            console.error('Error reading JSON file:', error)
            return []
        })
}

function saveRecipes(recipes) {
    return fetch(jsonPath, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipes),
    })
        .catch(error => {
            console.error('Error writing JSON file:', error)
        })
}


async function getRecipes() {
    console.log("🚀 ~ file: recipe.service.js:110 ~ getRecipes ~ readRecipes():", readRecipes())
    const recipes = await readRecipes()
    return recipes

    // return gRecipesDemo
}

async function add(recipe) {
    const recipes = await readRecipes()
    recipes.push(recipe)
    await saveRecipes(recipes)
}

async function remove(recipeId) {
    const recipes = await readRecipes()
    const recipeIdx = recipes.findIndex(recipe => recipe.id === recipeId)

    console.log("🚀 ~ file: recipe.service.js:123 ~ remove ~ recipes:", recipes)

    if (recipeIdx >= 0 && recipeIdx < recipes.length) {
        recipes.splice(recipeIdx, 1)
        await saveRecipes(recipes)
    }
}