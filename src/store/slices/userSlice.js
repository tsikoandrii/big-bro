import { createSlice } from '@reduxjs/toolkit'
import LocalStorage from '@/utils/LocalStorage'

// Декодинг jwt токена
const decodeToken = (token) => {
    try {

        return {
            isAuth: true,
        }
    } catch (err) {
        return {
            isAuth: false,
        }
    }
}

const initialState = () => {
    return {
        isAuth: Boolean(LocalStorage.getData('JWT_TOKEN'))
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            LocalStorage.setData('JWT_TOKEN', action.payload)
            state = decodeToken(action.payload)
            return state
        },
        logOut: (state) => {
            LocalStorage.removeData('JWT_TOKEN')
            state = {
                isAuth: false,
            }
            return state
        },
    },
})

export const { setToken, logOut } = userSlice.actions

export default userSlice.reducer