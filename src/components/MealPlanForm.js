import React, { useState } from 'react';

const MealPlanForm = ({ onSubmit }) => {
  const [mealPlan, setMealPlan] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' },
  });

  const handleChange = (day, mealType, value) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(mealPlan);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(mealPlan).map((day) => (
        <div key={day}>
          <h3>{day}</h3>
          {['breakfast', 'lunch', 'dinner'].map((mealType) => (
            <div key={mealType}>
              <label>
                {mealType.charAt(0).toUpperCase() + mealType.slice(1)}:
                <input
                  type="text"
                  value={mealPlan[day][mealType]}
                  onChange={(e) => handleChange(day, mealType, e.target.value)}
                  required
                />
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit Meal Plan</button>
    </form>
  );
};

export default MealPlanForm;