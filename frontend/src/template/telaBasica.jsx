import React, { Component } from 'react'

import i18n from '../i18n';

import PageHeader from './pageHeader'

export default class TelaBasica extends Component {

    render() {
        return (
            <div>
                <PageHeader name={i18n.t('people')} small={i18n.t('inclusion')}></PageHeader>
                {this.props.children}
            </div>
        )
        
    }
}