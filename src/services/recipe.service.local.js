const STORAGE_KEY = 'recipeDB'
const DEMO_DATA = [
    {
        "id": "11",
        "title": "Chickpea Curry",
        "description": "A delicious and nutritious chickpea curry with a blend of spices.",
        "ingredients": [
            "1 can (15 oz) chickpeas, drained and rinsed",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 can (14 oz) diced tomatoes",
            "1 can (14 oz) coconut milk",
            "1 tablespoon curry powder",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1/2 teaspoon turmeric",
            "Salt and pepper to taste",
            "2 tablespoons vegetable oil",
            "Fresh cilantro leaves for garnish"
        ],
        "method": [
            "In a large pan, heat the vegetable oil over medium heat.",
            "Add the chopped onion and garlic, and sauté until they become translucent.",
            "Add the curry powder, ground cumin, ground coriander, and turmeric. Stir well and cook for 2 minutes.",
            "Pour in the diced tomatoes and coconut milk. Stir to combine.",
            "Add the chickpeas, and season with salt and pepper. Simmer for 15-20 minutes, stirring occasionally, until the sauce thickens.",
            "Serve the chickpea curry hot, garnished with fresh cilantro leaves. Enjoy!"
        ]
    },
    {
        "id": "22",
        "title": "Spaghetti Aglio e Olio",
        "description": "A simple yet flavorful pasta dish with garlic, olive oil, and red pepper flakes.",
        "ingredients": [
            "8 oz spaghetti",
            "4 cloves garlic, thinly sliced",
            "1/4 cup olive oil",
            "1/2 teaspoon red pepper flakes (adjust to taste)",
            "Salt and black pepper to taste",
            "Fresh parsley leaves, chopped, for garnish"
        ],
        "method": [
            "Cook the spaghetti according to package instructions until al dente. Drain and set aside.",
            "In a large pan, heat the olive oil over low heat. Add the sliced garlic and red pepper flakes. Cook gently, stirring frequently, until the garlic becomes fragrant and lightly golden. Be careful not to burn the garlic.",
            "Add the cooked spaghetti to the pan and toss to coat with the garlic-infused olive oil. Season with salt and black pepper.",
            "Serve the spaghetti aglio e olio hot, garnished with chopped fresh parsley. Enjoy!"
        ]
    },
    {
        "id": "33",
        "title": "Black Bean Tacos",
        "description": "Tasty and satisfying tacos filled with seasoned black beans and your favorite toppings.",
        "ingredients": [
            "1 can (15 oz) black beans, drained and rinsed",
            "1 small onion, finely chopped",
            "1 clove garlic, minced",
            "1 teaspoon chili powder",
            "1/2 teaspoon ground cumin",
            "1/2 teaspoon paprika",
            "Salt and pepper to taste",
            "8 small corn tortillas",
            "Toppings of your choice: shredded lettuce, diced tomatoes, avocado slices, salsa, vegan sour cream, etc."
        ],
        "method": [
            "In a skillet, heat a bit of oil over medium heat. Add the chopped onion and garlic, and sauté until softened.",
            "Add the drained black beans, chili powder, ground cumin, paprika, salt, and pepper. Cook for 5-7 minutes, mashing some of the beans with a fork, until the mixture is heated through and well-seasoned.",
            "Warm the corn tortillas in a dry skillet or microwave for a few seconds.",
            "Fill each tortilla with the seasoned black beans and your choice of toppings.",
            "Serve the black bean tacos immediately. Enjoy!"
        ]
    },
    {
        "id": "44",
        "title": "Thai Green Curry",
        "description": "A flavorful and aromatic Thai green curry with assorted vegetables and tofu.",
        "ingredients": [
            "1 can (14 oz) coconut milk",
            "2 tablespoons green curry paste",
            "1 block (14 oz) firm tofu, cubed",
            "1 cup broccoli florets",
            "1 cup sliced bell peppers",
            "1 cup sliced zucchini",
            "1 carrot, sliced",
            "1 cup snow peas",
            "2 tablespoons soy sauce",
            "1 tablespoon brown sugar",
            "Fresh basil leaves for garnish",
            "Cooked jasmine rice, for serving"
        ],
        "method": [
            "In a large pan, heat the coconut milk over medium heat. Stir in the green curry paste and bring to a gentle simmer.",
            "Add the tofu and cook for 5 minutes, allowing it to absorb the flavors of the curry.",
            "Add the vegetables and continue to simmer for another 10-15 minutes, or until the vegetables are tender.",
            "Stir in the soy sauce and brown sugar. Taste and adjust the seasoning as needed.",
            "Serve the Thai green curry over cooked jasmine rice, garnished with fresh basil leaves. Enjoy!"
        ]
    },
    {
        "id": "55",
        "title": "Lentil Soup",
        "description": "A hearty and nutritious lentil soup loaded with vegetables and aromatic spices.",
        "ingredients": [
            "1 cup dried green or brown lentils, rinsed and drained",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 can (14 oz) diced tomatoes",
            "6 cups vegetable broth",
            "1 teaspoon ground cumin",
            "1 teaspoon ground coriander",
            "1/2 teaspoon smoked paprika",
            "Salt and black pepper to taste",
            "Fresh parsley leaves for garnish",
            "Lemon wedges, for serving"
        ],
        "method": [
            "In a large pot, sauté the onion and garlic in a bit of vegetable broth until softened.",
            "Add the carrots and celery and cook for a few minutes until they start to soften.",
            "Stir in the lentils, diced tomatoes, vegetable broth, and spices. Bring to a boil.",
            "Reduce the heat and let the soup simmer for 25-30 minutes, or until the lentils and vegetables are tender.",
            "Season with salt and black pepper to taste.",
            "Serve the vegan lentil soup hot, garnished with fresh parsley leaves and a squeeze of lemon juice. Enjoy!"
        ]
    }
]

const DEMO_DATA_HEBREW = [
    {
        "id": "11",
        "title": "קארי חומוס",
        "description": "קארי טעים ותזונתי עם ערבב תבלינים מגוונים.",
        "ingredients": [
            "1 פחית (15 אונקיות) חומוס, מנוקז ומשוטף",
            "1 בצל, קטן קטן, קטוף דק",
            "2 שיניים שום, קטופות דק",
            "1 פחית (14 אונקיות) עגבניות קלופות",
            "1 פחית (14 אונקיות) חלב קוקוס",
            "1 כף כרי פודר",
            "1 כפית כוסברה טחונה",
            "1 כפית כוסמין טחון",
            "1/2 כפית כורכום",
            "מלח ופלפל לפי הטעם",
            "2 כפות שמן צמחי",
            "עלים טריים של כוסברה להגשה"
        ],
        "method": [
            "בסיר גדול, שחזרו את השמן הצמחי על להבה בינונית.",
            "הוסיפו את הבצל הקטן קטן והשום, ושטו עד שהם מתרככים.",
            "הוסיפו את כרי הפודר, הכוסמין הטחון, הכוסברה הטחונה, והכורכום. טגנו טוב ובשלו 2 דקות.",
            "יצקו את העגבניות הקלופות וחלב הקוקוס. טגנו כל הרכיבים ליציבה.",
            "הוסיפו את החומוס, ותנו אותו במלח ופלפל. הביאו לרתיחה וטגנו 15-20 דקות, בערבוב מדי פעם, עד שהרוטב מתעבה.",
            "הגישו את הקארי חומוס חם, מקושט בעלים טריים של כוסברה. בתיאבון!"
        ]
    },
    {
        "id": "22",
        "title": "ספגטי אגליו אוילו",
        "description": "מנה פשוטה אך מופתית של ספגטי עם שום, שמן זית ופלפל אדום יבש.",
        "ingredients": [
            "8 אונקיות ספגטי",
            "4 שיניים שום, קטופות דק",
            "1/4 כוס שמן זית",
            "1/2 כפית פלפל אדום (כמות לפי הטעם)",
            "מלח ופלפל שחור לפי הטעם",
            "עלים טריים של פטרוזיליה, קטנוכות, להגשה"
        ],
        "method": [
            "בשלו את הספגטי לפי ההוראות באריזה עד שהם יוצאים 'אל דנטה'. סננו והניחו בצד.",
            "בסיר גדול, שחזרו את שמן הזית בלהבה נמוכה. הוסיפו את השום הקטוף והפלפל האדום. בשלו בעדינות, בתיאבון הרביתו בתדירות, עד שהשום הופך לריחני וזהבי בעדינות. יש להקפיד שלא לשרוף את השום.",
            "הוסיפו את הספגטי שסננו לסיר וערבבו כדי לספוג את השמן הזית הריחני של השום. מתימו במלח ופלפל שחור.",
            "הגישו את הספגטי אגליו אוילו חמים, מקשרו בפטרוזיליה טרייה קטופה. בתיאבון!"
        ]
    },
    {
        "id": "33",
        "title": "טקוס בזילאי שחור",
        "description": "טקוסים טעימים ומאושרים ממולאים בפול בלק מתובל ובתוספות האהובות עליכם.",
        "ingredients": [
            "1 פחית (15 אונקיות) פול בלק, מנוקז ומשוטף",
            "1 בצל קטן, קטניות קטן",
            "1 שיניים שום, קטופות דק",
            "1 כפית פודר צ'ילי",
            "1/2 כפית כוסמין טחון",
            "1/2 כפית פפריקה",
            "מלח ופלפל לפי הטעם",
            "8 טורטיות תירס קטנות",
            "תוספות לבחירתכם: עלי חסר, עגבניות קטנות, פרוסות אבוקדו, סלסה, קרם צמחי טבעוני, ועוד."
        ],
        "method": [
            "במחבת, שחזרו מעט שמן מעל להבה בינונית. הוסיפו את הבצל הקטן קטן והשום הקטוף, ושטו עד שהם מתרככים.",
            "הוסיפו את הפול השחוט, פודר הצ'ילי, הכוסמין הטחון, הפפריקה, המלח והפלפל. בשלו 5-7 דקות, התיחסו לתיבול.",
            "חממו את טורטיות התירס במחבת יבשה או הטמינו אותם במיקרוגל למספר שניות.",
            "מלאו כל טורטיה בפול בלק המתובל ובתוספות לבחירתכם.",
            "הגישו את הטקוס בזילאי שחור מיד. בתיאבון!"
        ]
    },
    {
        "id": "44",
        "title": "קארי ירוק תאי",
        "description": "קארי ירוק טעים וריחני עם ירקות מגוונים וטופו.",
        "ingredients": [
            "1 פחית (14 אונקיות) חלב קוקוס",
            "2 כפות פייסט קארי ירוק",
            "1 בלוק (14 אונקיות) טופו מוצק, קוטע לקוביות",
            "1 כוס פרחי פורוסים",
            "1 כוס פלפלים מסודרים",
            "1 כוס קישואים מסודרים",
            "1 גזר קטן, מסודר",
            "1 כוס פודי חרוב",
            "2 כפות רוטב סויה",
            "1 כפית סוכר חום",
            "עלים טריים של דקנה להגשה",
            "אורז ז'סמין מבושל, להגשה"
        ],
        "method": [
            "בסיר גדול, שחזרו את חלב הקוקוס מעל להבה בינונית. הוסיפו את פייסט הקארי הירוק והביאו לרתיחה עדינה.",
            "הוסיפו את הטופו ובשלו 5 דקות, מאפשרת לו לספוג את טעמי הקארי.",
            "הוסיפו את הירקות והמשיכו לרתוף עוד 10-15 דקות, עד שהירקות רכים.",
            "הוסיפו את רוטב הסויה והסוכר החום. טעמו והתאימו את התיבול לפי הטעם.",
            "הגישו את הקארי הירוק תאי מעל אורז ז'סמין מבושל, מקושר בעלים טריים של דקנה. בתיאבון!"
        ]
    },
    {
        "id": "55",
        "title": "מרק עדשים",
        "description": "מרק עדשים רך ומזין מטעמים רבים ותבלינים ארומטיים.",
        "ingredients": [
            "1 כוס עדשים ירוקות או חומות, משוטפות ומסננות",
            "1 בצל, קטן קטן, קטוף דק",
            "2 שיניים שום, קטופות דק",
            "2 גזרים, קוטעים לקוביות",
            "2 סלרייה, קוטעות לקוביות",
            "1 פחית (14 אונקיות) עגבניות קלופות",
            "6 כוסות מרק ירקות",
            "1 כפית כמון טחון",
            "1 כפית כוסברה טחונה",
            "1/2 כפית פפריקה מעושנת",
            "מלח ופלפל שחור לפי הטעם",
            "עלים טריים של פטרוזיליה להגשה",
            "רצועות לימון, להגשה"
        ],
        "method": [
            "בסיר גדול, שחזרו את הבצל והשום במעט מרק הירקות עד שהם מתרככים.",
            "הוסיפו את הגזרים והסלרייה ובשלו כמה דקות עד שהם מתרככים.",
            "הוסיפו את העדשים, העגבניות הקלופות, מרק הירקות, והתבלינים. הביאו לרתיחה.",
            "הפחיתו את הלהבה והנמיכי הסימון למרק יצוק 25-30 דקות, עד שהעדשים והירקות רכים.",
            "טעמו והתאימו את התיבול במלח ופלפל שחור לפי הטעם.",
            "הגישו את המרק הטבעוני מוקרר, מקושט בעלים טריים של פטרוזיליה ורצועות לימון. בתיאבון!"
        ]
    }
]

import { reactive } from 'vue'
import { utilService } from './util.service.js'

const recipes = reactive(
    getRecipes()
  )

export const recipeService = {
    getRecipes,
    getById,
    saveRecipes,
    addRecipe,
    updateRecipe,
    removeRecipe
}

function saveRecipes(recipes) {
    utilService.saveToStorage(STORAGE_KEY, recipes)
}

function getRecipes() {
    const recipes = utilService.loadFromStorage(STORAGE_KEY)
    if (recipes && recipes.length) {
        return recipes
    } else {
        utilService.saveToStorage(STORAGE_KEY, DEMO_DATA_HEBREW)
        return DEMO_DATA_HEBREW
    }
}

function getById(id) {
    const recipes = utilService.loadFromStorage(STORAGE_KEY)
    const recipe = recipes.find(recipe => recipe.id === id)
    return recipe
}

function addRecipe(recipe) {
    console.log("🚀 ~ file: recipe.service.local.js:160 ~ addRecipe ~ recipe:", recipe)
    const recipes = getRecipes()
    recipe.id = utilService.makeId()
    recipes.push(recipe)
    saveRecipes(recipes)
}

function updateRecipe(recipeToUpdate) {
    const recipes = getRecipes()
    const idx = recipes.findIndex(recipe => recipe.id === recipeToUpdate.id)
    console.log('recipes before', recipes)
    if (idx !== -1) {
        recipes[idx] = { ...recipeToUpdate }
    }
    console.log('recipes after', recipes)
}

function removeRecipe(id) {
    const recipes = utilService.loadFromStorage(STORAGE_KEY)
    const idx = recipes.findIndex(recipe => recipe.id === id)
    if (idx !== -1) {
        recipes.splice(idx, 1)
        saveRecipes(recipes)
    }
}