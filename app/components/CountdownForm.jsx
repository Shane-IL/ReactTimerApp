import React from 'react';

export default class CountdownForm extends React.Component{
    onSubmit(e){
        e.preventDefault();
        const strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        }
    }

    render(){
        return (
            <div>
                <form ref="form" onSubmit={(e) => this.onSubmit(e)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}
