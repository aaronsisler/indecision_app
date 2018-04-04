const addPageLoadTimeStampToState = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function (...args) {
        this.setState({ pageTimeStamp: Date.now() });
        console.log(`Method called: ${name}`)
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const addButtonClickTimeStampToState = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function (...args) {
        this.setState({ buttonClickStartTimeStamp: Date.now() });
        console.log(`Method called: ${name}`)
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const calculateTimeBetweenButtonClicks = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function (...args) {
        const timeBetween = Date.now() - this.state.buttonClickStartTimeStamp;
        this.setState({ timeBetweenButtonClicks: timeBetween });
        console.log(`Method called: ${name}`)
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const calculateTimeBetweenPageLoadAndButtonClick = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function (...args) {
        const timeBetween = Date.now() - this.state.pageTimeStamp;
        this.setState({ timeBetweenPageLoadAndButtonClick: timeBetween });
        console.log(`Method called: ${name}`)
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const fireWithParams = (thing) => {
    return function (target, name, descriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function (...args) {
            this.setState({ paramThing: thing });
            console.log(`Method called: ${name}`)
            return oldValue.apply(null, arguments);
        };

        return descriptor;
    }
}

export {
    addPageLoadTimeStampToState,
    addButtonClickTimeStampToState,
    calculateTimeBetweenButtonClicks,
    calculateTimeBetweenPageLoadAndButtonClick,
    fireWithParams
};