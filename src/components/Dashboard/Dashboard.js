import React, {Component} from 'react';
// import {connect} from 'react-redux';
import Header from '../Header';
import '../../CSS/dashboard.css';


export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    // componentDidMount(){

    // }
    render(){
        return(
            <section>
                <Header />
                <a href="/wizard"><button className='button'>add house</button></a>
            </section>
        )
    }
} 

// let ConnectedApp = connect()(Dashboard)