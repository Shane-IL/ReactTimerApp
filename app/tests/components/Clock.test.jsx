import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', ()=>{
    it('should exist', ()=>{
        expect(Clock).toExist();
    });

    describe('formatSeconds', ()=>{
        it('should format seconds', ()=>{
            const clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 615;
            const expected = "10:15";
            const actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected)
        });

        it('should format seconds when min/sec less than 10', ()=>{
            const clock = TestUtils.renderIntoDocument(<Clock/>);
            const seconds = 61;
            const expected = "01:01";
            const actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected)
        });
    });
});
