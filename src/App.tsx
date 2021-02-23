import { Component, render, h } from 'preact';

export default class App extends Component {

    render() {
        return (
            <div style={{ 
                backgroundImage: `url("https://via.placeholder.com/500")` 
            }}>
                <h1>Hi</h1>
            </div>
        );
    }
}
