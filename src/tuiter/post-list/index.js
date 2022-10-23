import React from "react";
import PostListItem from "./post-list-item";
import postsArray from "./home-posts.json";

const PostList = () => {
    return (
        <div>
            {
                postsArray.map(post => <PostListItem post={post}/>)
            }

        </div>

    )
}

export default PostList;