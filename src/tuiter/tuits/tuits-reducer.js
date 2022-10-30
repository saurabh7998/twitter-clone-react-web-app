import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits';

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits
                               })

export default tuitsSlice.reducer