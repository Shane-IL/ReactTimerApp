import expect  from 'expect';
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', ()=>{
        expect(Timer).toExist();
    });

    describe('handleStartTimer', () => {
        it('should set state to started and start counting', (done)=>{
            const timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            expect(timer.state.count).toBe(0);

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });

        it('should pause timer on paused status', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 10})
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(()=>{
                expect(timer.state.count).toBe(10);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should reset countd on stopped status', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 10})
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            setTimeout(()=>{
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
