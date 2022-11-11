import {createSlice} from "@reduxjs/toolkit";
import homeTuits from '../data/home-tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk, updateTuitThunk
} from "../../services/tuits-thunks";

// const currentUser = {
//     "userName": "Saurabh",
//     "handleName": "@saurabh7998",
//     "avatarImage": "/images/avatar.png",
// };

const templateTuit = {
    // ...currentUser,
    "topic": "General",
    "time": "23h",
    "replies": "4.2K",
    "retuits": "3.5K",
    "likes": "37.5K",
    "liked": true
}

const initialState = {
    tuits: [],
    loading: false
}

const homeTuitsSlice = createSlice({
                                       name: 'homeTuits',
                                       initialState,
                                       extraReducers: {
                                           [findTuitsThunk.pending]:
                                               (state) => {
                                                   state.loading = true
                                                   state.tuits = []
                                               },
                                           [findTuitsThunk.fulfilled]:
                                               (state, {payload}) => {
                                                   state.loading = false
                                                   state.tuits = payload
                                               },
                                           [findTuitsThunk.rejected]:
                                               (state) => {
                                                   state.loading = false
                                               },
                                           [deleteTuitThunk.fulfilled]:
                                               (state, {payload}) => {
                                                   state.loading = false
                                                   state.tuits =
                                                       state.tuits.filter(
                                                           t => t._id
                                                                !== payload._id)
                                               },
                                           [createTuitThunk.fulfilled]:
                                               (state, action) => {
                                                   state.loading = false
                                                   state.tuits.push(
                                                       action.payload)
                                               },
                                           [updateTuitThunk.fulfilled]:
                                               (state, action) => {
                                                   state.loading = false
                                                   const tuitNdx = state.tuits
                                                       .findIndex((t) => t._id
                                                                         === action.payload._id)
                                                   state.tuits[tuitNdx] = {
                                                       ...state.tuits[tuitNdx],
                                                       ...action.payload
                                                   }
                                               }
                                       },

                                       // reducers: {
                                       //     createTuit(state, action) {
                                       //         state.unshift(
                                       //             {
                                       //                 ...action.payload,
                                       //                 ...templateTuit,
                                       //                 _id: (new
                                       // Date()).getTime() }) },
                                       // deleteTuit(state, action) { const
                                       // index = state.findIndex( (obj) =>
                                       // obj._id === action.payload._id)
                                       // state.splice(index, 1) } }
                                   })

export const {createTuit, deleteTuit} = homeTuitsSlice.actions
export default homeTuitsSlice.reducer