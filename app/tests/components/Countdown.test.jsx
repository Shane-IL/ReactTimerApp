import expect  from 'expect';
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', ()=>{
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and count down', (done)=>{
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should not count down below zero', (done)=>{
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});
