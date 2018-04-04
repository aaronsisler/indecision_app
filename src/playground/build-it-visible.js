class VisibiltyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibilty: false,
        }
    }

    render() {
        return (
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibilty ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibilty && <p>"Hey, these are some details you can see"</p>}
            </div>
        );
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibilty: !prevState.visibilty,
            }
        });
    }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'));


//JSX
// let detailsShown = false;

// const toggleDetails = () => {
//     detailsShown = !detailsShown;
//     renderApp();
// };

// const renderApp = () => {
//     const appTemplate = (
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={toggleDetails}>
//                 {detailsShown ? "Hide Details" : "Show Details"}
//             </button>
//             {detailsShown && <p>"Hey, these are some details you can see"</p>}
//         </div>
//     );
//     ReactDOM.render(appTemplate, document.getElementById('app'));
// };

// renderApp();