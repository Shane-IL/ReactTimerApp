import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class WeatherForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }

    componentDidUpdate(prevProps, prevState){
        const currentStatus = this.state.countdownStatus;
        if(currentStatus !== prevState.countdownStatus){
            switch(currentStatus){
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

    startTimer(){
        this.timer = setInterval(()=>{
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    }

    render(){
        const {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountDown={this.handleSetCountdown}/>
            </div>
        )
    }
};
