const pantryItems = [
    "oatmeal", "berries", "almonds", "chicken", "salad greens", "vinaigrette",
    "spaghetti", "marinara sauce", "garlic bread", "greek yogurt", "honey", "granola",
    "turkey", "avocado", "bread", "tofu", "vegetables", "rice", "eggs", "toast", "fruit",
    "quinoa", "black beans", "corn", "salsa", "salmon", "potatoes", "asparagus",
    "banana", "spinach", "protein powder", "wrap", "caesar dressing", "curry", "basmati rice",
    "pancake mix", "maple syrup", "strawberries", "tuna", "crackers", "pizza dough", "cheese",
    "tomato sauce", "avocado", "egg", "cheese", "tomato soup", "bbq chicken", "corn on the cob",
    "coleslaw", "bread", "cinnamon", "apples", "roast beef", "mashed potatoes", "green beans"
];

function getShoppingList(mealIngredients, pantryItems) {
    const uniqueIngredients = [...new Set(mealIngredients)];
    return uniqueIngredients.filter(item =>
        !pantryItems.some(pantry => pantry.toLowerCase() === item.toLowerCase())
    );
}

describe('Shopping List Generator', () => {
    test('removes pantry items from meal ingredients', () => {
        const mealIngredients = ["chicken", "rice", "avocado", "cheese", "tomato", "lettuce"];
        const result = getShoppingList(mealIngredients, pantryItems);
        expect(result).toEqual(["tomato", "lettuce"]);
    });

    test('removes duplicates', () => {
        const mealIngredients = ["tomato", "tomato", "lettuce", "lettuce"];
        const result = getShoppingList(mealIngredients, pantryItems);
        expect(result).toEqual(["tomato", "lettuce"]);
    });

    test('returns all if no pantry items match', () => {
        const mealIngredients = ["mushroom", "zucchini"];
        const result = getShoppingList(mealIngredients, pantryItems);
        expect(result).toEqual(["mushroom", "zucchini"]);
    });

    test('returns empty if all are pantry items', () => {
        const mealIngredients = ["rice", "chicken"];
        const result = getShoppingList(mealIngredients, pantryItems);
        expect(result).toEqual([]);
    });
});