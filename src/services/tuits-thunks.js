import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from './tuits-service'

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async () => await service.findTuits());

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuit) => {
        await service.deleteTuit(tuit)
        return tuit
    });

export const createTuitThunk = createAsyncThunk(
    '/tuits/createTuit',
    async (tuit) => {
        const serverTuit = await service.createTuit(tuit)
        return serverTuit
    });

export const updateTuitThunk = createAsyncThunk(
    '/tuits/updateTuit',
    async (tuit) => {
        await service.updateTuit(tuit)
        return tuit
    }
)