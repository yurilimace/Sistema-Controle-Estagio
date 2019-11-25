import React,{Component} from 'react'
import styled from 'styled-components'
import Input from './input'
import Button from './button'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import FormHoC from '../Hoc/Hoc-Form'
class Intershipform extends Component{
    constructor(props){
        super(props)
        
    }

    handleSubmit = (event) =>{
        event.preventDefault()
    }

    continue = () =>{
        
    }

    render(){
        return(
            <div className={this.props.className}>
                <form onSubmit={this.handleSubmit}>
                    <h3 style={{paddingTop:'25px',color:'black'}}>  Dados Pessoais  </h3>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="Nome" name='name' onChange={this.props.handleChange}>
                    </Input>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="Matriula" name='matricula'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="RG" name='rg' onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="CPF" name='cpf'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="data de nascimento" name='data_nasc' onChange={this.props.handleChange}>
                    </Input>
                    <Input width='50%' height='50px' margin='10px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="Curso" name='curso'onChange={this.props.handleChange} >
                    </Input>
                    <Input width='50%' height='50px' margin='0px 0px 20px 0px' 
                        border='2px solid rgb(230, 233, 240)' radius ='10px' fsize='16px'
                        caret=':rgba(230, 233, 240, 1)'placeholder="Semestre" name='semestre'onChange={this.props.handleChange} >
                    </Input>
                    <div>
                        <Button text='Proximo' margin='15px 0 0 0 ' color='#F58212' border='none' radius='5px' 
                        height='50px' width='50%' fontcolor='white' fsize='18px' onClick={this.props.addStep} />  
                    </div>
                </form>
            </div>
        )
    }
}


const StyledIntership = styled(Intershipform)`
    width:70%;
    height: 80%;
    margin: 40px auto;

`;

export default  StyledIntership