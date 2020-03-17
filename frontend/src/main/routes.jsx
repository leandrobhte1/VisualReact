import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Senha from '../senha/senha'
import CriarSenha from '../senha/criarSenha'
import AtenderSenha from '../senha/atenderSenha'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Todo}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/senha' component={Senha}></Route>
        <Route path='/senhaCriar' component={CriarSenha}></Route>
        <Route path='/atenderSenha' component={AtenderSenha}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)