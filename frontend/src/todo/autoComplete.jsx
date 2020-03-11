import React from 'react';

import faker from 'faker'

// Import the Autocomplete Component
import Autocomplete from 'react-autocomplete';

import axios from 'axios'

const URLGeral = 'http://localhost:3007/api/todos'

const URLLanguages = 'http://localhost:3007/api/languages'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, searchPeople, changeDescription, search, clear, handlerKey, addLanguage, searchLanguages, changeDescriptionValue } from './todoActions'

const inputStyle = {
    width: '100%',
  };

  

class AutoComplete extends React.Component {

    

    constructor(props, context) {
        super(props, context);

        // Set initial State
        this.state = {
            // Current value of the select field
            value: "",
            // Data that will be rendered in the autocomplete
            // As it is asynchronous, it is initially empty
            autocompleteData: [],
            options: []
        };

        

        

        

        // Bind `this` context to functions of the class
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getItemValue = this.getItemValue.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }

    /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
    retrieveDataAsynchronously(searchText){
        let _this = this;

        let resultSearch = this.props.searchPeople(searchText);

        let optionsSearch = resultSearch[0].payload;

        _this.setState({
            autocompleteData: optionsSearch
        });

    //     // Url of your website that process the data and returns a
    //     let url = `http://localhost:3007/api/languages?query=${searchText}`; ///search itens in relational databases

    // // let url=`http://localhost:3007/api/languages?name=${searchText}`;///retornara resultado apenas se palavra é exatamente igual ao registro do banco,não pega palavras incompletas
        
    //     // Configure a basic AJAX request to your server side API
    //     // that returns the data according to the sent text
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.responseType = 'json';
    //     xhr.onload = () => {
    //         let status = xhr.status;

    //         if (status == 200) {
    //             _this.setState({
    //                 autocompleteData: optionsSearch
    //             });

    //             // Show response of your server in the console
    //             // console.log("languages in db:",xhr.response);
    //         } else {
    //             console.error("Cannot load data from remote source");
    //         }
    //     };

    //     xhr.send();
    }
    
    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
    onChange(e){
        this.setState({
            value: e.target.value
        });

        /**
         * Handle the remote request with the current text !
         */
        this.retrieveDataAsynchronously(e.target.value);

        this.props.changeDescriptionValue(e.target.value);

        // console.log("The Input Text has changed to ", e.target.value);
    }

    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
    onSelect(val){
        this.setState({
            value: val
        });

        this.props.changeDescriptionValue(val);

        // console.log("Option from 'database' selected : ", val);
    }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
    renderItem(item, isHighlighted){
        return (
            <div className="opcoesLinguagens" style={{ background: isHighlighted ? 'lightgray' : 'white', padding: '10px 20px' }}>
                {item}
            </div>   
        ); 
    }

    /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    getItemValue(item){
        return `${item}`;
    }

    render() {

        

        return (
            <div>
                <Autocomplete
                    getItemValue={this.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    value={this.props.description}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    inputProps={{ className: "InputLanguages", placeholder: "Digite aqui um nome",style: inputStyle }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({description: state.todo.description})

const mapDispatchToProps = dispatch => bindActionCreators({ add, searchPeople, changeDescription, search, clear, handlerKey, addLanguage, searchLanguages, changeDescriptionValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete)