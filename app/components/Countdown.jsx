import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

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
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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

    handleStatusChange(newStatus){
        this.setState({countdownStatus: newStatus})
    }

    render(){
        const {count, countdownStatus} = this.state;
        const renderControlArea = () => {
            if(countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={(e) => this.handleStatusChange(e)}/>;
            }
            else {
                return <CountdownForm onSetCountDown={this.handleSetCountdown}/>;
            }
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
};
