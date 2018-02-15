import React, {Component} from 'react';
// import {connect} from 'react-redux';

export default class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <a href="/dashboard"><button>Click Me</button></a>
            </div>
        )
    }
} 

// let ConnectedApp = connect()(Home)