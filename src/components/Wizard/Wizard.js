import React, {Component} from 'react';

import Header from '../Header';
import '../../CSS/wizard.css';
export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name: '',
            description: '',
            address:'',
            city:'',
            state:'',
            zip:'',
            imgurl:'',
            loanAmt:'',
            monthly:'',
            desired:'',
            showForm1: 'visible',
            showForm2: 'hidden',
            showForm3: 'hidden',
            showForm4: 'hidden',
            showForm5: 'hidden',
        }
        this.changeVisibilityShow = this.changeVisibilityShow.bind(this)
    }

    handleChange(name,e){
        this.setState({
            name: e.target.value
        })
    }

    changeVisibilityShow(){
        this.setState({
            showForm1: 'hidden',
            showForm2: 'visible'
        })
    }

    render(){
        const form1={
            visibility:this.state.showForm1,
        }
        const form2={
            visibility:this.state.showForm2,
        }
        const form3={
            visibility:this.state.showForm3,
        }
        const form4={
            visibility:this.state.showForm4,
        }
        const form5={
            visibility:this.state.showForm5,
        }


        return(
            <section>
                <Header />
                <div className="forms">
                <div style={form1} className="form">
                <button onClick={()=>this.changeVisibilityShow()}>Next Step</button>
                </div>
                <div style={form2} className="form2">
                </div>
                <div style={form3} className="form3">
                </div>
                <div style={form4} className="form4">
                </div>
                <div style={form5} className="form5">
                </div>
                </div>
            </section>
        )
    }
}