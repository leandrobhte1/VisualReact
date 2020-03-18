import React, { Component } from 'react'

import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList } from '../senha/senhaActions'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from '../template/modal'
import ModalBTInput from '../template/modalInput'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

class MenuLateralOficial extends Component {

    constructor(props) {
        super(props);
    }

    handlerClick(n){

        let { fluxo, senhaAtual, senhasFila, senhasList } = this.props


        if(n == 1){
            this.props.nextTicket(senhaAtual + 1)
        } else if (n == 4 ){
            this.props.changeSenha(senhasFila + 1)
            this.props.insertSenhaList(senhasList[senhasFila + 1]);
        } else if(n == 7){
            this.props.changeSenha(senhasFila - 1)
            console.log("senha finalizada.: ",senhaAtual);
            this.props.finalizaSenhaList(senhaAtual)
        }

        // console.log("Chegou aqui!", fluxo);

        this.props.changeFluxo(n);
    }

    nextTicket(){

        let { senhasFila, senhaAtual } = this.props

        if(senhasFila <= senhaAtual){
            alert("Não existem senhas na fila! Para chamar a próxima senha crie uma senha antes!");
        } else {
            this.handlerClick(1);
        }
    }

    showSenhasFila() {
        let { fluxo, senhaAtual, senhasFila, senhasList } = this.props

        console.log("senhasFila.: ",senhasList);


    }

    renderRows(fluxo) {

        // console.log("fluxo.: ",fluxo);

        if(fluxo == 0) {
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.nextTicket()} className="menuListItem"><button className="menuButton">Próxima senha</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><a href="#/senhaCriar"><button className="menuButton">Criar senha</button></a></li>
                        <div className="ui divider"></div>
                        <li onClick={() => this.showSenhasFila()} className="menuListItem"><a href="#/senhasFila"><button className="menuButton">Senhas na fila</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Cancelar senha" titulo="Digite a senha que deseja cancelar abaixo!" placeholder="Digite a senha a ser cancelada aqui" ></ModalBTInput></li>
                    </ul>
                </div>
            )
        }else if(fluxo == 1){
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.nextTicket()} className="menuListItem"><button className="menuButton">Próxima senha</button></li>
                        <div className="ui divider"></div>
                        <li onClick={() => this.handlerClick(2)} className="menuListItem"><a href="#/atenderSenha"><button className="menuButton">Inicia atendimento</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li onClick={() => this.showSenhasFila()} className="menuListItem"><a href="#/senhasFila"><button className="menuButton">Senhas na fila</button></a></li>
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
                        <li className="menuListItem"><ModalBTInput name="Cancelar senha" titulo="Digite a senha que deseja cancelar abaixo!" placeholder="Digite a senha a ser cancelada aqui" ></ModalBTInput></li>
                    </ul>
                </div>
            )
        }else if(fluxo == 2){
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.handlerClick(7)} className="menuListItem"><a href="#/home"><button className="menuButton">Finaliza atendimento</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Cancelar senha" titulo="Digite a senha que deseja cancelar abaixo!" placeholder="Digite a senha a ser cancelada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Cancela atendimento</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><button className="menuButton">Criar senha</button></li>
                        <div className="ui divider"></div>
                    </ul>
                </div>
            )
        }else {
            return (
                <div className="actionsList">
                    <ul className="menuList">
                        <li onClick={() => this.nextTicket()} className="menuListItem"><button className="menuButton">Próxima senha</button></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Senha Específica" titulo="Digite a senha desejada abaixo!" placeholder="Digite a senha desejada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><a href="#/senhaCriar"><button className="menuButton">Criar senha</button></a></li>
                        <div className="ui divider"></div>
                        <li onClick={() => this.showSenhasFila()} className="menuListItem"><a href="#/senhasFila"><button className="menuButton">Senhas na fila</button></a></li>
                        <div className="ui divider"></div>
                        <li className="menuListItem"><ModalBTInput name="Cancelar senha" titulo="Digite a senha que deseja cancelar abaixo!" placeholder="Digite a senha a ser cancelada aqui" ></ModalBTInput></li>
                    </ul>
                </div>
            )
        }
    }

    render() {
        let { fluxo } = this.props
        return (
            <div className="leandrooliveira">
                {this.renderRows(fluxo)}
            </div>
            
        )
    }
    
}

const mapStateToProps = state => ({fluxo: state.senha.fluxo, senhaAtual: state.senha.senhaAtual, senhasFila: state.senha.senhasFila, senhasList: state.senha.senhasList})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuLateralOficial)