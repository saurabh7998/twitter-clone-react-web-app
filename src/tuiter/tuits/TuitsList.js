import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const postsArray = useSelector((state) => state.homeTuits)
    return (
        <div>
            {
                postsArray.map(post => <TuitItem post={post}/>)
            }
        </div>
    )
}

export default TuitsList