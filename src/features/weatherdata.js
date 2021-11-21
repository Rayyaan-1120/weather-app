import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{

    },
    query:'Karachi'
}

export const Weatherslice = createSlice({
    name:"weather",
    initialState,
    reducers:{
        pushdata: (state,{payload}) => {
            state.value = payload
        },
        query:(state,{payload}) => {
            state.query = payload
        }
    }

}) 

export const {pushdata,query} = Weatherslice.actions
export default Weatherslice.reducer