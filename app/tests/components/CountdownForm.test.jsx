import expect  from 'expect';
import React from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {

    it('should exist', ()=>{
        expect(CountdownForm).toExist();
    })

    it('should call onSetCountDown if valid seconds entered', () => {
        const spy = expect.createSpy();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountDown if invalid seconds entered', () => {
        const spy = expect.createSpy();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
