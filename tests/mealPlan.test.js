const mealPlan = require('../mealPlan');

describe('weeklyMealPlan', () => {
    test('should export an array of 7 days', () => {
        expect(Array.isArray(mealPlan)).toBe(true);
        expect(mealPlan.length).toBe(7);
    });

    test('each day should have correct structure', () => {
        mealPlan.forEach(dayPlan => {
            expect(dayPlan).toHaveProperty('day');
            expect(dayPlan).toHaveProperty('meals');
            expect(typeof dayPlan.day).toBe('string');
            expect(typeof dayPlan.meals).toBe('object');
            expect(dayPlan.meals).toHaveProperty('breakfast');
            expect(dayPlan.meals).toHaveProperty('lunch');
            expect(dayPlan.meals).toHaveProperty('dinner');
        });
    });
});