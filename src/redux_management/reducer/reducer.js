import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 90,
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        redoCounterAction: state=> {
            state.value = 90
        }
        
    }
})

export const { 
    increment,
    decrement,
    redoCounterAction
} = counterSlice.actions