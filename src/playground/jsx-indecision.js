console.log('App.js is running!');

const title = 'This is the title';
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two'],
};


const getSubtitle = (subtitle) => subtitle ? <p>Subtitle: {subtitle}</p> : undefined;
const getOptions = (options) => {
    if (!options || options.length == 0) {
        return <p>No options</p>;
    }
    return <ol>
        {app.options.map((option, index) => {
            return <li key={index}>{option}</li>;
        })
        }
    </ol>;
}
const onFormSubmit = (e) => {
    e.preventDefault();
    //const textBox = document.getElementsByName('option');
    //console.log('Value', textBox[0]['value']);

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
};
const onRemoveAll = () => {
    app.options = [];
    renderApp();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const appTemplate = (
        <div>
            <h1>{app.title}</h1>
            {getSubtitle(app.subtitle)}
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Reset All</button>
            {getOptions(app.options)}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(appTemplate, appRoot);
};

const titleRoot = document.getElementById('titleId');
const appRoot = document.getElementById('app');

ReactDOM.render(title, titleRoot);
renderApp();
