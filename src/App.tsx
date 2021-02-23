import { Component, render, h } from 'preact';

export default class App extends Component {

    render() {
        return (
            <div style={{ 
                backgroundImage: `url("https://via.placeholder.com/500")`,
                height: "100%",
                width: "100%",
                margin: 0,
                border: "none"
            }}>
                <h1>Hi</h1>
            </div>
        );
    }
}
