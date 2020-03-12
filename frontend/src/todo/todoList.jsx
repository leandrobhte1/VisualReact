import React, { Component } from 'react'

import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { markAsDone } from './todoActions'
import { markAsPending } from './todoActions'
import { remove } from './todoActions'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

class TodoList extends Component {

    constructor(props){
        super(props)
    }

    renderRows() {

        const list = this.props.list || []

        list.reverse();

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    {/* <IconButton style='success' icon='check' hide={!todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></IconButton> */}
                    <IconButton style='danger' icon='trash-o' 
                        onClick={() => this.props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>{i18n.t('people')}</th>
                            <th className='tableActions'>{i18n.t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
            
        )
    }
    
}

const mapStateToProps = state => ({list: state.todo.list})

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)