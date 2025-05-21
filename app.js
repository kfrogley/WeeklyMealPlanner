const mealPlan = require('./mealPlan');
const pantryItems = require('./pantryItems');

// Example: Map meals to ingredients (in real use, you'd parse meal strings to ingredients)
const mealIngredients = [
  "oatmeal", "berries", "almonds", "chicken", "salad greens", "vinaigrette",
  "spaghetti", "marinara sauce", "garlic bread", "greek yogurt", "honey", "granola",
  "turkey", "avocado", "bread", "tofu", "vegetables", "rice", "eggs", "toast", "fruit",
  "quinoa", "black beans", "corn", "salsa", "salmon", "potatoes", "asparagus",
  "banana", "spinach", "protein powder", "wrap", "caesar dressing", "curry", "basmati rice",
  "pancake mix", "maple syrup", "strawberries", "tuna", "crackers", "pizza dough", "cheese",
  "tomato sauce", "avocado", "egg", "cheese", "tomato soup", "bbq chicken", "corn on the cob",
  "coleslaw", "bread", "cinnamon", "apples", "roast beef", "mashed potatoes", "green beans"
];

// Remove duplicates and pantry items
const uniqueIngredients = [...new Set(mealIngredients)];
const shoppingList = uniqueIngredients.filter(item =>
!pantryItems.some(pantry => item.toLowerCase().includes(pantry.split(' ')[0]))
);

console.log("Shopping List:");
shoppingList.forEach(item => console.log("- " + item));