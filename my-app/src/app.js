import React from 'react';
import { Hello } from './hello';
import { Welcome } from './welcome';
import Counter from './counter';
import ClickCounter from './clickCounter';
import ClickTracker from './clickTracker';
import Interactivewelcome from './interactiveWelcome';
import Login from './login';
import UncontrolledLogin from './uncontrolledLogin';

const name = <strong>Alfio</strong>
export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={name} age={20}/>
                <Counter initialValue={0} incrementInterval={1000} incrementAmount={1}/>
                <ClickCounter />
                <ClickTracker/>
                <Interactivewelcome />
                <Login />
                <UncontrolledLogin />
            </div>
        )
    }
}