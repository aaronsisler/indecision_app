import React from 'react';
import ReactDOM from 'react-dom';
import { fireConsole, log, logWithParams } from './dec_file';

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.callTheFire = this.callTheFire.bind(this);
        this.state = {
            thing: undefined,
        }
    }

    returnState(){
        return this.state;
    }
    changeState() {
        this.setState(() => ({ thing: "taco" }));
    }

    // @logWithParams('Passing a thing')
    @log.bind(this)
    callTheFire() {
        console.log("Fire the console");
    }

    componentDidMount() {
        console.log("Mounting");
    }

    componentWillUnmount() {
        console.log("Unmounting");
    }

    render() {
        return (
            <div>
                <div>I am the app</div>
                <div>Thing: {this.state.thing}</div>
                <button onClick={this.callTheFire}>Click me</button>
            </div>
        )
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
