import React from "react";

class TodoList extends React.Component {
    state = { items: ['Giacomo', 'Luca', 'Matteo', 'Giovanni', 'Pietro'], newItems: '' }

    handleInputChange = (event) => {
        const value = event.target.value
        this.setState({
            newItems: value
        })
    }

    handleInputSubmit= () => {
        this.setState({
            items: [...this.state.items, this.state.newItems],
            input: ''
        })
    }

    clearItemsList = () => {
        this.setState({
            items: []
        })
    }

    removeItemsList = (removeItem) => {
		const filter = this.state.items.filter((items) => items !== removeItem);

		this.setState({
			items: [ ...filter ]
		});
	};

    render() {
        return (
            <>
                <label>
                    Name
                    <input name="input" type='text' value={this.state.input} onChange={this.handleInputChange} autoFocus/>
                </label>

                <button onClick={this.handleInputSubmit} disabled={!this.state.newItems}>Submit</button>
                <button name="reset" onClick={this.clearItemsList}>Reset</button>
                
                <div>
                    {this.props.render(this.state.items, this.removeItemsList)}
                </div>
            </>
        )
    }
}

export default TodoList