import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'store/slices/userSlice'
import reserveReducer from 'store/slices/reserveSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        reserve: reserveReducer,
    },
    devTools: true,
})

export default store