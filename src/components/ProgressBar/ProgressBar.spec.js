import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
    test('getWidthAsPercentOfTotalWidth should return 250 w total width 500 and 50 percent', () => {
        const wrapper = shallow(<ProgressBar percent={50} width={500} />);
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    });
});