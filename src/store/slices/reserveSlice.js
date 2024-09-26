import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    date: null,
    time: null,
    service: null,
    master: null
}

export const reserveSlice = createSlice({
    name: 'reserve',
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            state = {
                date: action.payload.date,
                time: action.payload.time,
                service: action.payload.service,
                master: action.payload.masterId,
            }
            return state
        },
        clear: (state) => {
            state = {
                date: null,
                time: null,
                service: null,
                master: null,
            }
            return state
        },
    },
})

export const { setData, clear } = reserveSlice.actions

export default reserveSlice.reducer