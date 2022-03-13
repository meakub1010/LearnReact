import {Component} from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
        // if we use arrow function for increment and decrement above code snippet is not required. Because arrow function has access to the this keyword

        // if we don't do envent binding like above or use arrow function our html in the render function will look like below
        // <button onClick={() => { this.increment()}}></button>


    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render(){

        return (<div>
                <h3>Count: {this.state.counter}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>);

    };
}

export default Counter;