import React , {Component}from 'react';
import {connect} from 'react-redux';
import '../CSS/header.css';

//38D
class Header extends Component{
    render(){
        return(
            <header>
                <p id="brand">{this.props.name}</p>
                <a href="/"><p>Logout</p></a>
            </header>
        )
} 
}
function mapStateToProps(state){
    return {
        name : state.name
    }
}

let ConnectedHeader = connect(mapStateToProps);
export default ConnectedHeader(Header)