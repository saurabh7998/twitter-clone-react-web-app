import React from "react";

const PostListItem = ({post}) => {
    return (
        <div class="row border border-secondary p-3">
            <div class="col-2 avatar">
                <img src={post.avatarImage} class="img-fluid rounded-circle"/>
            </div>
            <div class="col">
                <div>
                    <span className="">{post.userName} </span>
                    <span> <i className="bi bi-patch-check-fill"></i></span>
                    <span class="">  {post.handleName}</span>
                    <span class=""> - {post.time}</span>
                    <i class="fa-solid fa-ellipsis float-end "></i>
                </div>
                <div class="pb-2 ">{post.heading}</div>
                <div class="card">
                    <img src={post.contentImage} class="card-img-top"
                         alt="..."/>
                    {post.contentTitle && post.content ?
                     <div class="card-body">
                         <p class="card-text">
                             <div class="">
                                 {post.contentTitle}
                             </div>
                             <div class="">
                                 {post.content}
                             </div>
                             <div class="link">
                                 <i class="fa-solid fa-link"></i>
                                 {post.link}
                             </div>
                         </p>
                     </div> : <></>
                    }
                </div>
                <div class="row  pt-3 justify-content-evenly">
                    <div class="col">
                        <span><i className="bi bi-chat"></i></span>
                        <span>  {post.replies}</span>
                    </div>
                    <div class="col">
                        <span><i className="bi bi-reply"></i></span>
                        <span>  {post.retuits}</span>
                    </div>
                    <div class="col">
                        <span><i className="bi bi-heart"></i></span>
                        <span>  {post.likes}</span>
                    </div>
                    <div class="col">
                        <span><i className="bi bi-arrow-bar-up"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostListItem