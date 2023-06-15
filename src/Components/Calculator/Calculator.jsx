import React, {useState} from 'react'
import './Calculator.css'
import Button from '../Button/Button'
import Display from '../Display/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}




export default class Calculator extends Component {

  state = {...initialState}
  
  constructor(props){
    super(props)

    this.clearMemory = this.clearMemory.bind(this)
    this.addNumber = this.addNumber.bind(this)
  }


  clearMemory(){
    this.setState({...initialState})
  }

  addNumber(x){
    if(x === '.' && this.state.displayValue.includes('.')){
      return;
    }
  


  const clearDisplay = this.state.displayValue === '0' || state.clearDisplay
  const currentValue = clearDisplay ? '' : state.displayValue
  const displayValue = currentValue + x 

  this.setState({displayValue: displayValue, clearDisplay: false })


  if(x != '.'){
    const index = this.state.current
    const newValue = parseFloat(displayValue)
    const values = [...this.state.values]

    values[index] = newValue
    this.setState({values: values})
  }
}

  setOperation(operation){

    if(this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true} )
    }else{
      const equals = operation === "="
      const currentOperation = this.state.operation
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values}[1]`)
      }catch(erro){
        values[0] = this.state.values[0]
      }
      values[1] = 0

      this.setState({ displayValue: values[0], 
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })

    }

  }

  

  render(){
    
    return (
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button onClick ={this.clearMemory} triple label='AC'/>
        <Button onClick ={this.setOperation} opetation label='/'/>
        <Button onClick={this.addNumber} label='7'/>
        <Button onClick={this.addNumber} label='8'/>
        <Button onClick={this.addNumber} label='9'/>
        <Button onClick ={this.setOperation} operation label='*'/>
        <Button onClick={this.addNumber} label='4'/>
        <Button onClick={this.addNumber} label='5'/>
        <Button onClick={this.addNumber} label='6'/>
        <Button onClick={this.addNumber} label='-'/>
        <Button onClick={this.addNumber} label='1'/>
        <Button onClick={this.addNumber} label='2'/>
        <Button onClick={this.addNumber} label='3'/>
        <Button operation onClick ={this.setOperation} label='+'/>
        <Button onClick={this.addNumber} double label='0'/>
        <Button operation onClick ={this.setOperation} label='.'/>
        <Button onClick ={this.setOperation} operation label='='/>
      </div>
    )

  }
  
}

