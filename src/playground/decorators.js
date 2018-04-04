import React from 'react';
import ReactDOM from 'react-dom';
import {
    addPageLoadTimeStampToState,
    addButtonClickTimeStampToState,
    calculateTimeBetweenButtonClicks,
    calculateTimeBetweenPageLoadAndButtonClick,
    fireWithParams
} from './dec_file';

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.startButtonTimer = this.startButtonTimer.bind(this);
        this.stopPageLoadButtonTimer = this.stopPageLoadButtonTimer.bind(this);
        this.stopButtonClickButtonTimer = this.stopButtonClickButtonTimer.bind(this);
        this.resetAllState = this.resetAllState.bind(this);
        this.fireParamCall = this.fireParamCall.bind(this);
        this.state = {
            pageTimeStamp: Date.now(),
            timeBetweenPageLoadAndButtonClick: undefined,
            buttonClickStartTimeStamp: undefined,
            timeBetweenButtonClicks: undefined,
            paramThing: undefined
        }
    }

    //Page Load Timer example
    @addPageLoadTimeStampToState
    componentDidMount() {
        console.log("Mounting");
    }

    @calculateTimeBetweenPageLoadAndButtonClick
    stopPageLoadButtonTimer() {
        console.log("Button page load timer stopped");
    }

    //Button Clicks Timer example
    @addButtonClickTimeStampToState
    startButtonTimer() {
        console.log("Button timer triggered");
    }

    @calculateTimeBetweenButtonClicks
    stopButtonClickButtonTimer() {
        console.log("Button between clicks timer stopped");
    }

    @fireWithParams('taco')
    fireParamCall() {
        console.log('Fire Param call');
    }

    resetAllState() {
        this.setState(
            {
                pageTimeStamp: Date.now(),
                timeBetweenPageLoadAndButtonClick: undefined,
                buttonClickStartTimeStamp: undefined,
                timeBetweenButtonClicks: undefined,
                paramThing: undefined
            });
    }

    convertTimeToLocaleString(timeStamp) {
        if (timeStamp) {
            return new Date(timeStamp).toLocaleString();
        }
    }

    convertTimeToHHMMSS(timeStamp) {
        if (timeStamp) {
            const date = new Date(timeStamp);
            return `${date.getHours()}:${this.formatTimePadding(date.getMinutes())}:${this.formatTimePadding(date.getSeconds())}`;
        }
    }

    formatTimePadding(timeSegment) {
        return timeSegment > 9 ? timeSegment : '0' + timeSegment;
    }

    render() {
        return (
            <div>
                <h1>Decorator Examples</h1>
                <div>
                    <h3>Page Load Example</h3>
                    <div>Page Load Time Stamp: {this.convertTimeToHHMMSS(this.state.pageTimeStamp)}</div>
                    <div>Time Between Page Load and Button Click: {this.state.timeBetweenPageLoadAndButtonClick}</div>
                    <br />
                    <button onClick={this.stopPageLoadButtonTimer}>Stop Page Timer</button>
                </div>
                <div>
                    <h3>Button Click Example</h3>
                    <div>Button Click Time Stamp: {this.convertTimeToHHMMSS(this.state.buttonClickStartTimeStamp)}</div>
                    <div>Time Between Button Clicks: {this.state.timeBetweenButtonClicks}</div>
                    <br />
                    <button onClick={this.startButtonTimer}>Start Button Timer</button>
                    <button disabled={!this.state.buttonClickStartTimeStamp} onClick={this.stopButtonClickButtonTimer}>Stop Button Timer</button>
                </div>
                <div>
                    <h3>Test Param Example</h3>
                    <div>Random Parameter: {this.state.paramThing}</div>
                    <br />
                    <button onClick={this.fireParamCall}>Fire Param Call</button>
                </div>
                <div>
                    <h4>Reset All Timers (including Page Load)</h4>
                    <button onClick={this.resetAllState}>Reset All</button>
                </div>
            </div>
        )
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
