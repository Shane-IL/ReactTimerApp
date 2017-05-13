import React from 'react';
import PropTypes from 'prop-types';

export default class Controls extends React.Component {
    render(){
        const {countdownStatus} = this.props;
        const renderStartStopButton = () =>{
            if(countdownStatus === "started"){
                return <button className="button secondary">Pause</button>
            }
            else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
};

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired
};
