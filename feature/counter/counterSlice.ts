import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    value: number
}

export const conuterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    } as InitialState,
    reducers: {
        increment: (state) => { state.value += 1},
        decrement: (state) => { state.value -= 1 },
        incrementByCount: (state, action) => {
            state.value += action.payload
        }
    }
    
})

export const { decrement, increment, incrementByCount } = conuterSlice.actions;
export default conuterSlice.reducer;