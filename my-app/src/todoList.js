import React from "react";

class TodoList extends React.Component {
    state = { items: ['Giacomo', 'Luca', 'Matteo', 'Giovanni', 'Pietro'], newItems: '' }

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            newItems: value
        })
    }

    handleInputSubmit= (event) => {
        this.setState({
            items: [...this.state.items, this.state.newItems],
            input: ''
        })
    }

    render() {
        return (
            <>
                <label>
                    Name
                    <input name="input" type='text' value={this.state.input} onChange={this.handleInputChange} autoFocus/>
                </label>
                <button onClick={this.handleInputSubmit} disabled={!this.state.newItems}>Submit</button>
                <ul>
                    {this.state.items.map((items, index) => (
                        <li key={index}>{items}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default TodoList