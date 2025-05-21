import React from 'react';

const MealPlanDisplay = ({ mealPlan }) => {
  return (
    <div>
      <h1>Weekly Meal Plan</h1>
      {mealPlan.map((dayPlan) => (
        <div key={dayPlan.day}>
          <h2>{dayPlan.day}</h2>
          <ul>
            <li><strong>Breakfast:</strong> {dayPlan.meals.breakfast}</li>
            <li><strong>Lunch:</strong> {dayPlan.meals.lunch}</li>
            <li><strong>Dinner:</strong> {dayPlan.meals.dinner}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MealPlanDisplay;