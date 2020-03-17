import React from 'react'

import PageHeader from '../template/pageHeader'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

import MenuLateral from '../template/menuLateral'
import MenuLateralTemp from '../template/MenuLateralTemp'
import MenuLateralOficial from '../template/menuLateralOficial'
import InfoSenhas from '../template/informacoesSenha'
import Cabecalho from '../template/cabecalho'

export default props => (
    <div>
        <PageHeader name={i18n.t('emissor')} small={i18n.t('senhas')}></PageHeader>
        <div className="container">
            <Cabecalho unidade="TRIBUNAL REGIONAL DO TRABALHO" secao={i18n.t('Atendimento')} fila={i18n.t('Fila')} 
                guiche={i18n.t('Guiche')} atendente={i18n.t('Atendente')} status={i18n.t('Status')} tempo={i18n.t('Tempo')} hora={i18n.t('Hora')}></Cabecalho>
        </div>
        <div className="corpoContent container">
            
            <MenuLateralOficial></MenuLateralOficial>
            <div className="preenche">
                <h3>Serviços Disponíveis: </h3>
                <a href="#/senha"><button className="serv">Serviço2</button></a>
            </div>
            
        </div>
    </div>
    
)