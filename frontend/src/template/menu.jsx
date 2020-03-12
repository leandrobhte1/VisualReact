import React from 'react'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <img className="img-fluid logoSite" src="https://i.ibb.co/pPtcGHn/logo-via-logohub.png" alt="logo-via-logohub"></img>
                    {/* <i className='fa fa-calendar-check-o'></i> {i18n.t('test')} */}
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href="#/todos">{i18n.t('people')}</a></li>
                    <li><a href="#/about">{i18n.t('about')}</a></li>
                </ul>
            </div>
        </div>
    </nav>
)