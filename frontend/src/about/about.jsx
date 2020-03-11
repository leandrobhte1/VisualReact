import React from 'react'

import PageHeader from '../template/pageHeader'

import { useTranslation, Trans } from "react-i18next";

export default props => (
    <div>
        <PageHeader name='Sobre' small='Nós'></PageHeader>

        <h2><Trans i18nKey="history">trans</Trans></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsam, veritatis maxime ab adipisci maiores aspernatur, sed, repellendus dignissimos expedita ullam ut. Ipsum quasi deleniti iusto deserunt sequi distinctio minima.</p>
        <h2><Trans i18nKey="mission">trans</Trans></h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis necessitatibus dolorem obcaecati reprehenderit temporibus est corporis, accusamus fugit! Harum ullam, impedit ipsum inventore corrupti voluptate mollitia repellendus voluptatibus vitae ea?</p>
        <h2><Trans i18nKey="vision">trans</Trans></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at, deserunt consectetur excepturi ex consequatur debitis impedit ad numquam ipsa maiores quia aut pariatur cum, rerum perspiciatis fugiat asperiores expedita!</p>
        
    </div>
)