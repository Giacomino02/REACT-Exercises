import React from 'react';
import { Hello } from './hello';
import { Welcome } from './welcome';
import ClickCounter from './clickCounter';
import ClickTracker from './clickTracker';
import Interactivewelcome from './interactiveWelcome';
import Login from './login';
import UncontrolledLogin from './uncontrolledLogin';
import TodoList from './todoList';
import { Container } from './container';
// import { LanguageContext } from './languageContext';
// import { DisplayLanguage } from './displayLanguage';
import { Sum } from './sum';
import { GithubUserList } from './GithubUserList';
import { HookCounter } from './HookCounter';
import { HookForm } from './HookForm';
import { HookGithubUser } from './GithubUser';
import { CardDetails } from './CardDetails';
import { LanguageComponent } from './languageContext';
import { FilteredList } from './FilteredList';
import {Routes, Route} from "react-router-dom"

export function App() {

    function onCounterChange(count) {
        console.log('count', count);
    }

    const initialData = {
        brand: 'Audi',
        model: 'R8',
        color: 'White',
        year: '2008'
    }

    const usersArray = [
        { name: 'Giacomo', id: 0, age: 19 },
        { name: 'Alfio', id: 1, age: 40 },
        { name: 'Janman', id: 2, age: 22 },
        { name: 'Karim', id: 3, age: 26 },
        { name: 'Davide', id: 4, age: 26 },
        { name: 'Giada', id: 5, age: 27 },
    ]
    return (
        <div>

            
            <Routes>
                <Route path="/" element={<Welcome name="Giacomo"/>}/>
                
            </Routes>

            {/* <ClickCounter onCounterChange={onCounterChange} />
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

            <LanguageComponent />
            <div>
                    <select value={this.state.lang} onChange={this.handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Italiano">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={this.state.lang}>
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                </div>

            <Sum />

            <HookGithubUser /> 
            <GithubUserList />
            <HookCounter />
            <HookForm />

            <CardDetails initialData={initialData} />

            <FilteredList usersArray={usersArray} /> */}
        </div>
    )
}
