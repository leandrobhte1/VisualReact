import React from 'react'

export default props => (
    
    <div className="cabecalho">
        <div className="line0">
            <h3>{props.unidade}</h3>
        </div>
        <div className="ui divider"></div>
        <div className="bottom">
            <div className="line1 line">
                <div className="cabecalho__secao cspace">
                    <div className="prop">
                        <span className="bold">{props.secao}</span>
                    </div>
                    <div className="resp">
                        <span>ATENDIMENTO_01</span>
                    </div>
                </div>
                <div className="ui vertical divider"></div>
                <div className="cabecalho__fila cspace">
                    <div className="prop pl20">
                        <span className="bold">{props.fila}</span>
                    </div>
                    <div className="resp">
                        <span>0 senha(s)</span>
                    </div>
                </div>
            </div>
            <div className="line2 line">
                <div className="cabecalho__guiche cspace">
                <div className="prop">
                        <span className="bold">{props.guiche}</span>
                    </div>
                    <div className="resp">
                        <span>GUICHE 01</span>
                    </div>
                </div>
                <div className="cabecalho__atendente cspace">
                <div className="prop pl20">
                        <span className="bold">{props.atendente}</span>
                    </div>
                    <div className="resp">
                        <span>FABIANA</span>
                    </div>
                </div>
            </div>
            <div className="line3 line">
                <div className="cabecalho__status cspace">
                <div className="prop">
                        <span className="bold">{props.status}</span>
                    </div>
                    <div className="resp">
                        <span>SEM SENHAS NA FILA</span>
                    </div>
                </div>
                <div className="cabecalho__tempo cspace">
                <div className="prop pl20">
                        <span className="bold">{props.tempo}</span>
                    </div>
                    <div className="resp">
                        <span>0:08:29</span>
                    </div>
                </div>
            </div>
            <div className="line4 line">
                <div className="cabecalho__hora cspace">
                <div className="prop pl20">
                        <span className="bold">{props.hora}</span>
                    </div>
                    <div className="resp">
                        <span>17/03/2020 - 07:56</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)