import React from "react";

const TuitStats = ({post}) => {
    return (
        <div>
            <div className="pb-2 ">{post.heading}</div>
            <div className="row  pt-3 justify-content-evenly">
                <div className="col">
                    <span><i className="bi bi-chat"></i></span>
                    <span>  {post.replies}</span>
                </div>
                <div className="col">
                    <span><i className="bi bi-reply"></i></span>
                    <span>  {post.retuits}</span>
                </div>
                <div className="col">
                    <span><i className="bi bi-heart"></i></span>
                    <span>  {post.likes}</span>
                </div>
                <div className="col">
                    <span><i className="bi bi-arrow-bar-up"></i></span>
                </div>
            </div>
        </div>
    )
}

export default TuitStats