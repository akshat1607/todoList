import React from 'react'

function Reducer(state,action) {
    switch(action.type)
    {
        case 'ADD':
        {
            let size=action.size;
            state.push(action.value)
            return state
        }
        case 'DELETE':
        {
            delete state[action.index]
            return state
        }
        default:
            return state
    }
}

export default Reducer