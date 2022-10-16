import post from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        ${post.map((item) => PostItem(item)).join('')}
    `)
}

export default PostList;