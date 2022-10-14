import React from 'react';
import { Hello } from './hello';
import { Welcome } from './welcome';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name='Giacomo' />
            </div>
        )

    }
}