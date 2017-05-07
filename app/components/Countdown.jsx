import React from 'react';
import Clock from 'Clock';

export default class WeatherForm extends React.Component{
    render(){
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        )
    }
};
