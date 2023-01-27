import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

const userData = {
    email: '',
    password: ''
}

const initialState: IUser = {
    user: userData,
    authToken: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        resetUser: () => initialState
    },
});

export const { setUser, setAuthToken, resetUser } = userReducer.actions;

export default userReducer.reducer;
