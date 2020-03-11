import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import { useTranslation, Trans } from "react-i18next";

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default function App() {

    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const index = 11;

  return (

    
    <div className="container">
        <Menu></Menu>
        <button onClick={() => changeLanguage("pt")}>pt</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <div className="App-intro">
            {/* <Trans i18nKey="first">
            To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
            <Trans i18nKey="welcome">trans</Trans> */}
        </div>
        <Routes></Routes>
    </div>

  )
    
}