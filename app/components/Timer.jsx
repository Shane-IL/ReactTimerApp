import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        };
    }

    componentDidUpdate(prevProps, prevState){
        const currentStatus = this.state.timerStatus;
        if(currentStatus !== prevState.timerStatus){
            switch(currentStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = null;
                    break;
            }
        }
    }

    handleStartTimer() {
        this.setState({
            timerStatus: 'started'
        });
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        this.timer = null;
    }

    startTimer(){
        this.timer = setInterval(()=>{
            const newCount = this.state.count + 1;
            this.setState({
                count: newCount <= 600 ? newCount : 600
            });
            if(newCount === 600){
                this.setState({timerStatus: 'stopped'})
            };
        }, 1000);
    }

    handleStatusChange(newStatus){
        this.setState({timerStatus: newStatus})
    }

    render(){
        const {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={(e) => this.handleStatusChange(e)}/>;
            </div>
        )
    }
};
