import React from 'react'
import './Button.css'

function Button({label, double, triple, operation, onClick}) {
  

  
  return (

    
    
    <button onClick={() => onClick(label)}
     className={`button 
    ${double ? 'double' : ''}
    ${triple ? 'triple' : ''}
    ${operation ? 'operation' : ''}
    `}>

        {label}
    </button>
  )
}

export default Button