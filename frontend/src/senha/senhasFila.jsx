import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

import MenuLateral from '../template/menuLateral'
import MenuLateralTemp from '../template/MenuLateralTemp'
import MenuLateralOficial from '../template/menuLateralOficial'
import InfoSenhas from '../template/informacoesSenha'
import Cabecalho from '../template/cabecalho'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo, nextTicket, changeSenha, insertSenhaList } from '../senha/senhaActions'

class SenhasFila extends Component {

    constructor(props) {
        super(props);
    }

    handlerClick(){
        let { senhasFila, senhasList, senhaAtual } = this.props

        this.props.changeSenha(senhasFila + 1);
        this.props.insertSenhaList(senhaAtual + 1);
    }

    handlerTickets(){
        
        let { senhasFila, senhasList, servico, senhaAtual } = this.props
        

        console.log("SenhasFila.: ",senhasFila);

        if(senhasList.length == 0){
            return (
                <span>Nenhuma senha na fila!</span>
            )
        }

        return senhasList.map(pass => (
            <span key={pass}>{pass}, </span>
        ))
    }

    render() {
        let { senhasFila, senhasList, servico } = this.props

        return (
            <div>
                <PageHeader name={i18n.t('emissor')} small={i18n.t('senhas')}></PageHeader>
                <div className="container">
                    <Cabecalho unidade="TRIBUNAL REGIONAL DO TRABALHO" secao={i18n.t('Atendimento')} fila={i18n.t('Fila')} 
                        guiche={i18n.t('Guiche')} atendente={i18n.t('Atendente')} status={i18n.t('Status')} tempo={i18n.t('Tempo')} hora={i18n.t('Hora')}></Cabecalho>
                </div>
                <div className="corpoContent container">
                    
                    <MenuLateralOficial></MenuLateralOficial>
                    <div className="preenche">
                        <h3>Senhas na fila: </h3>
                        <span>{this.handlerTickets()}</span>
                    </div>
                    
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({fluxo: state.senha.fluxo, senhasList: state.senha.senhasList, senhaAtual: state.senha.senhaAtual, senhasFila: state.senha.senhasFila, servico: state.senha.servico})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo, nextTicket, changeSenha, insertSenhaList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SenhasFila)
