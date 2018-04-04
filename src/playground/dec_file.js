//Wrapper
const fireConsole = () => {
    return function (target) {
        setState(() => ({ thing: Date.now() }));
    }
}

const log = (target, name, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function (...args) {
        console.log(this.state);
        //this.changeState();
        this.setState(() => ({ thing: "taco" }));
        this.setState({tabTimeStamp: Date.now()});
        console.log(`Calling "${name}"`);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const logWithParams = (thing) => {
    return function (target, name, descriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function (...args) {
            console.log(thing);
            const stateThing = target.returnState();
            console.log(stateThing);
            console.log(`Calling "${name}"`);
            return oldValue.apply(null, arguments);
        };

        return descriptor;
    }
}


export {
    fireConsole,
    log,
    logWithParams
};