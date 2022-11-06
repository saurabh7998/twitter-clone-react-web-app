import React from "react";
import PostListItem from "./post-list-item";
import {useSelector} from "react-redux";

const PostList = () => {
    const postsArray = useSelector((state) => state.homeTuits)
    return (
        <div>
            {
                postsArray.map(post => <PostListItem post={post}/>)
            }

        </div>

    )
}

export default PostList;