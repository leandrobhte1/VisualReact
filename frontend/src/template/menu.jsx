import React from 'react'

import { useTranslation, Trans } from "react-i18next";

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> <Trans i18nKey="test">translation</Trans>
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href="#/todos"><Trans i18nKey="inclusion">translation</Trans></a></li>
                    <li><a href="#/about"><Trans i18nKey="about">translation</Trans></a></li>
                </ul>
            </div>
        </div>
    </nav>
)