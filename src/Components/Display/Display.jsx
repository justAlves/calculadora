import React from 'react'
import './display.css'

function Display({value}) {
  return (
    <div className='display'>
        <span>
            {value}
        </span>
    </div>
  )
}

export default Display