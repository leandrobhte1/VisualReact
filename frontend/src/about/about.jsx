import React from 'react'

import PageHeader from '../template/pageHeader'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

export default props => (
    <div className="container" i18n={i18n}>

        <PageHeader name={i18n.t('about')} small={i18n.t('us')}></PageHeader>
        
        {/* <PageHeader name='Sobre' small='Nós'></PageHeader> */}

        <h2>{i18n.t('history')}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsam, veritatis maxime ab adipisci maiores aspernatur, sed, repellendus dignissimos expedita ullam ut. Ipsum quasi deleniti iusto deserunt sequi distinctio minima.</p>
        <h2>{i18n.t('mission')}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis necessitatibus dolorem obcaecati reprehenderit temporibus est corporis, accusamus fugit! Harum ullam, impedit ipsum inventore corrupti voluptate mollitia repellendus voluptatibus vitae ea?</p>
        <h2>{i18n.t('vision')}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at, deserunt consectetur excepturi ex consequatur debitis impedit ad numquam ipsa maiores quia aut pariatur cum, rerum perspiciatis fugiat asperiores expedita!</p>
        
    </div>
)