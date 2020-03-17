import React, { Component } from 'react'

import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo } from '../senha/senhaActions'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from '../template/modal'
import ModalBTInput from '../template/modalInput'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

class MenuLateralOficial extends Component {

    constructor(props) {
        super(props);

        // Set initial State
        // this.state = {
        //     fluxo: 0 /// 0-inicial  1-chamar próxima senha  2-atender senha
        // };
    }

    handlerClick(n){

        const { fluxo } = this.props

        console.log("Chegou aqui!", fluxo);

        this.props.changeFluxo(n);
        // this.setState({
        //     fluxo: n
        // });
    }

    renderRows(fluxo) {

        console.log("fluxo.: ",fluxo);

        if(fluxo == 0) {
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.handlerClick(1)} className="menuListItem"><a href="#/senha"><ModalBT name="Próxima senha" titulo="Já existe senha vinculada!" conteudo="Confirma chamada de outra senha?"></ModalBT></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><a href="#/senhaCriar"><button className="menuButton">Criar senha</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Senhas na fila</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Cancelar senha</button></li>
                    </ul>
                </div>
            )
        }else if(fluxo == 1){
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li className="menuListItem"><button className="menuButton">Próxima senha</button></li>
                        <div className="ui divider"></div>
                        <li onClick={() => this.handlerClick(2)} className="menuListItem"><a href="#/atenderSenha"><button className="menuButton">Inicia atendimento</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Senhas na fila</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Descongelar senha</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Filtro prioridade</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Exclui atividade</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Filtro categoria</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Filtro atividade</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Cancela senha</button></li>
                    </ul>
                </div>
            )
        }else if(fluxo == 2){
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.handlerClick(0)} className="menuListItem"><a href="#/home"><button className="menuButton">Finaliza atendimento</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Cancela senha</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Cancela atendimento</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Criar senha</button></li>
                        <div className="ui divider"></div>
                    </ul>
                </div>
            )
        }
    }

    render() {
        const { fluxo } = this.props
        return (
            <div className="">
                {this.renderRows(fluxo)}
            </div>
            
        )
    }
    
}

const mapStateToProps = state => ({fluxo: state.senha.fluxo})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuLateralOficial)