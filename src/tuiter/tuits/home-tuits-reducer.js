import {createSlice} from "@reduxjs/toolkit";
import homeTuits from './home-tuits';

const currentUser = {
    "userName": "Saurabh",
    "handleName": "@saurabh7998",
    "avatarImage": "/images/avatar.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "General",
    "time": "23h",
    "replies": "4.2K",
    "retuits": "3.5K",
    "likes": "37.5K",
    "liked": true
}

const homeTuitsSlice = createSlice({
                                       name: 'homeTuits',
                                       initialState: homeTuits,
                                       reducers: {
                                           createTuit(state, action) {
                                               state.unshift(
                                                   {
                                                       ...action.payload,
                                                       ...templateTuit,
                                                       _id: (new Date()).getTime()
                                                   })
                                           },
                                           deleteTuit(state, action) {
                                               const index = state.findIndex(
                                                   (obj) => obj._id ===
                                                            action.payload._id)
                                               state.splice(index, 1)
                                           }
                                       }
                                   })

export const {createTuit, deleteTuit} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer