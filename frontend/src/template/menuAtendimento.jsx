import React from 'react'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from './modal'
import ModalBTInput from './modalInput'

export default props => (
    
    <div className="actionsList">
        <ul className="menuList">
            <li className="menuListItem"><a href="#/senha"><button className="menuButton">Finaliza atendimento</button></a></li>
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