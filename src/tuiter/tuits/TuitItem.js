import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./home-tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch()
    const tuitDelete = (post) => {
        dispatch(deleteTuit(post))
    }

    return (
        <div className="row border border-secondary p-3">
            <div className="col-2 avatar">
                <img src={post.avatarImage}
                     className="img-fluid rounded-circle"/>
            </div>
            <div className="col">
                <div>
                    <span className="">{post.userName} </span>
                    <span> <i className="bi bi-patch-check-fill"></i></span>
                    <span className="">  {post.handleName}</span>
                    <span className=""> - {post.time}</span>
                    <i
                        className="bi bi-x-lg float-end"
                        onClick={() => tuitDelete(post)}
                    ></i>
                </div>
                <div className="pb-2 ">{post.content}</div>
                <TuitStats post={post}/>
            </div>
        </div>
    )
}

export default TuitItem