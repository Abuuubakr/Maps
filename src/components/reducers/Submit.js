import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'submit',
    initialState : {
        search : ''
    },

    reducers : {
        setState : (state, action) => {
            const { payload } = action;
            state.search = payload
        }
    }
})

export const { setState } = slice.actions
export default slice.reducer;