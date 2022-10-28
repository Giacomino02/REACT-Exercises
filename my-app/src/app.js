import React from 'react';
import { Hello } from './hello';
import { Welcome } from './welcome';
import Counter from './counter';
import ClickCounter from './clickCounter';
import ClickTracker from './clickTracker';
import Interactivewelcome from './interactiveWelcome';
import Login from './login';
import UncontrolledLogin from './uncontrolledLogin';
import TodoList from './todoList';
import { Container } from './container';
import { LanguageContext } from './languageContext';
import { DisplayLanguage } from './displayLanguage';

const name = <strong>Alfio</strong>
export class App extends React.Component {
    state = {
        lang: 'English'
    }
    handleLanguageChange = (event) => {
        this.setState({
            lang: event.target.value
        });
    };
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={name} age={20} />
                <Counter initialValue={0} incrementInterval={1000} incrementAmount={1} />
                <ClickCounter />
                <ClickTracker />
                <Interactivewelcome />
                <Login />
                <UncontrolledLogin />
                <TodoList render={(items, removeItem) => {
                    return (
                        items.map((items, index) => (
                            <div key={index}>
                                {items}
                                <button key={index} onClick={() => { removeItem(items) }}>remove</button>
                            </div>
                        ))
                    )
                }
                }
                />
                <Container title={<h1>Title</h1>}>
                    <p>
                        Lorem ipsum dolor sit amet
                    </p>
                </Container>

                <div>
                    <select value={this.state.lang} onChange={this.handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Italiano">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={this.state.lang}>
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                </div>

            </div>
        )
    }
}