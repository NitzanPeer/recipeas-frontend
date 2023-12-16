
// const ? = 'http://127.0.0.1:3030/'

const STORAGE_KEY = 'recipeDB'

export const recipeService = {
    getRecipes,
    getById,
    addRecipe,
    updateRecipe,
    removeRecipe
}

async function getRecipes(filterBy = { txt: '', tags: [] }) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/recipes`)
        if (!response.ok) {
            throw new Error('Failed to fetch recipes')
        }

        const recipes = await response.json()

        if (recipes && recipes.length) {
            return recipes.filter(recipe => {
                return (
                    recipe.title.includes(filterBy.txt) &&
                    filterBy.tags.every(tag => recipe.tags.includes(tag))
                )
            })
        } else {
            return recipes
        }
    } catch (error) {
        console.error('Error fetching recipes:', error)
        throw error
    }
}

async function getById(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/recipes/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch recipe')
        }
        const recipe = await response.json()
        return recipe
    } catch (error) {
        console.error('Error fetching recipe:', error)
        throw error
    }
}

async function addRecipe(recipe) {
    try {
        const response = await fetch('http://127.0.0.1:3030/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })

        if (!response.ok) {
            throw new Error('Failed to add recipe')
        }

        return await response.json()
    } catch (error) {
        console.error('Error adding recipe:', error)
        throw error
    }
}

async function updateRecipe(recipe) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/recipes/${recipe._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })

        if (!response.ok) {
            throw new Error('Failed to update recipe')
        }
        console.log('response.json', response.json)
        return await response.json()
    } catch (error) {
        console.error('Error updating recipe:', error)
        throw error
    }
}

async function removeRecipe(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3030/recipes/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Failed to remove recipe')
        }

        return { success: true }
    } catch (error) {
        console.error('Error removing recipe:', error)
        throw error
    }
}