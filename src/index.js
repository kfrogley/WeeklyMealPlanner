import React from 'react';
import ReactDOM from 'react-dom';
import MealPlanForm from './components/MealPlanForm';
import MealPlanDisplay from './components/MealPlanDisplay';
import weeklyMealPlan from './mealPlan';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealPlan: weeklyMealPlan,
    };
  }

  updateMealPlan = (newMealPlan) => {
    this.setState({ mealPlan: newMealPlan });
  };

  render() {
    return (
      <div>
        <h1>Weekly Meal Planner</h1>
        <MealPlanForm onSubmit={this.updateMealPlan} />
        <MealPlanDisplay mealPlan={this.state.mealPlan} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));