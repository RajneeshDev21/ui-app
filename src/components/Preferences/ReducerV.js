
import React, { useReducer } from 'react'

const ReducerV = () => {
  const arr =[1,2,3]
  const initialState = { counter: 0 }

  const appReducer = (state, action) => {

    switch (action.type) {
      case 'increase':
        return { counter: state.counter + 1 }
      case 'decrease':
        return { counter: state.counter - 1 }
      default:
        return { counter: state.counter }
    }
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (<>
    <div className='text-center'>
    <h1>
        Use Reducer
      </h1>

    </div>
    <div className='text-center mt-5'>
      <h1>
        Current count is: {state.counter}
      </h1>

    </div>
    <div className='text-center'>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
      <button className='m-3' onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
    </div>
  </>
  )
}

export default ReducerV