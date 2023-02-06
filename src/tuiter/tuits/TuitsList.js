import React, {useEffect, useState} from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.homeTuits)

    const dispatch = useDispatch();

    // on component load
    // invoke find tuits thunk to fetch tuits and
    // put them in the reducer's store, so we can
    // extract them with useSelector() and render
    // the tuits here
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
            </ul>
            {
                tuits.map(post => <TuitItem post={post}/>)
            }
        </div>
    )
}

export default TuitsList