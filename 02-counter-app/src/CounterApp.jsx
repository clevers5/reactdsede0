import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({value}) => {
    //Hook useState 
    const [counter, setCounter] = useState(value);

        //Añadir 1 al contador
        const handleAdd = () => {
            setCounter((c) => c + 1);
        }

        //Restar 1 al contador
        const handleSubtract = () => {
            setCounter(counter - 1);
        }

        //Resetear el contador
        const handleReset = () => {
            setCounter(value);
        }

  return (
    <>
        <div>CounterApp</div>
        <h2>{counter}</h2>

        <button className='AddButton' onClick={handleSubtract}>-1</button>
        <button aria-label='btn-reset' className='ResetButton' onClick={handleReset}>Reset</button>
        <button  className='SubtractButton' onClick={handleAdd}>+1</button>
        
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 100,
}

