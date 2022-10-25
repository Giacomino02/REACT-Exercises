import React from 'react';
import CounterDisplay from './counterDisplay';

class Counter extends React.Component{
    state = {count: this.props.initialValue};

    constructor(props){
        super(props);
        setInterval(() => {
            this.setState({
                count: this.state.count + this.props.incrementAmount
            });
        }, this.props.incrementInterval);
    }
    render(){
        return <CounterDisplay count={this.state.count}/>
    }
}
export default Counter;