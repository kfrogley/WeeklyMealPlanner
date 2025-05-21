const validateMealInput = (mealInput) => {
  const errors = {};

  if (!mealInput.day) {
    errors.day = "Day is required.";
  }

  if (!mealInput.meals) {
    errors.meals = "Meals are required.";
  } else {
    const { breakfast, lunch, dinner } = mealInput.meals;
    if (!breakfast) {
      errors.breakfast = "Breakfast is required.";
    }
    if (!lunch) {
      errors.lunch = "Lunch is required.";
    }
    if (!dinner) {
      errors.dinner = "Dinner is required.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const validateDay = (day) => {
  const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return validDays.includes(day);
};

export { validateMealInput, validateDay };