import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import TelaBasica from '../template/telaBasica'

import i18n from '../i18n';

import { useTranslation, Trans } from "react-i18next";

export default props => (
    // <div className="container">
    //     <PageHeader name={i18n.t('people')} small={i18n.t('inclusion')}></PageHeader>
    //     {/* <PageHeader name='Pessoas' small='Inclusão'></PageHeader> */}
    //     <TodoForm></TodoForm>
    //     <TodoList></TodoList>
    // </div>

    <TelaBasica>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
    </TelaBasica>
)