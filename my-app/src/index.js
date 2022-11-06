import ReactDOM from 'react-dom';
import { App } from './app';
import './index.css';
import { BrowserRouter } from "react-router-dom"
const root = document.querySelector('#root');
const app = <App/>
ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
    , root)