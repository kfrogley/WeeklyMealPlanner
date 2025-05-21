const pantryItems = require('../pantryItems');

describe('pantryItems', () => {
    test('should export an array', () => {
        expect(Array.isArray(pantryItems)).toBe(true);
    });

    test('should contain common pantry items', () => {
        expect(pantryItems).toEqual(
            expect.arrayContaining([
                expect.any(String)
            ])
        );
    });

    test('should not be empty', () => {
        expect(pantryItems.length).toBeGreaterThan(0);
    });
});