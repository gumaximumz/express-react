import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello, Navtech!'
        }
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateText.bind(this) } />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('test1')
);