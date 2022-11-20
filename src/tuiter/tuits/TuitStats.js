import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {
    const dispatch = useDispatch()
    console.log(post.dislikes);
    return (
        <div>
            <div className="pb-2 ">{post.heading}</div>
            <div className="row  pt-3 justify-content-evenly">
                <div className="col">
                    <span><i className="bi bi-chat me-2"></i></span>
                    <span>  {post.replies}</span>
                </div>
                <div className="col">
                    <span><i className="bi bi-reply me-2"></i></span>
                    <span>  {post.retuits}</span>
                </div>
                <div className="col">
                    <span>
                        {
                            post.liked &&
                            <i className="bi bi-heart-fill me-2 text-danger"
                               onClick={() =>
                                   dispatch(updateTuitThunk({
                                                                ...post,
                                                                likes: post.liked
                                                                       ?
                                                                       post.likes
                                                                       - 1
                                                                       : post.likes,
                                                                liked: !post.liked
                                                            }))
                               }>
                            </i>
                        }
                        {
                            !post.liked &&
                            <i className="bi bi-heart me-2"
                               onClick={() =>
                                   dispatch(updateTuitThunk({
                                                                ...post,
                                                                likes: !post.liked
                                                                       ?
                                                                       post.likes
                                                                       + 1
                                                                       : post.likes,
                                                                liked: !post.liked
                                                            }))
                               }>
                            </i>

                        }
                    </span>
                    <span>  {post.likes}</span>
                </div>
                <div className="col">
                    <span>
                        <i className="bi bi-hand-thumbs-down"
                           onClick={() =>
                               dispatch(updateTuitThunk({
                                                            ...post,
                                                            dislikes: post.dislikes + 1,
                                                            disliked: !post.disliked
                                                        }))
                           }
                        >

                        </i>
                    </span>
                    <span> {post.dislikes}</span>
                </div>
                <div className="col">
                    <span><i className="bi bi-arrow-bar-up"></i></span>
                </div>
            </div>
        </div>
    )
}

export default TuitStats