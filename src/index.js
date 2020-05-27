import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path = "/" exact>
                <App/>
            </Route>
            <Route path = "/create">
                <h1>Cadastro</h1>
            </Route>
        </Switch>            
    </BrowserRouter>
    , document.getElementById('root'));