import {getWidthAsPercentOfTotalWidth} from './percentUtils';

describe('getWidthAsPercentOfTotalWidth', () => {
    test('should return 250 w total width 500 and 50 percent', () => {
        const width = getWidthAsPercentOfTotalWidth(50, 500);
        expect(width).toEqual(250);
    });
});