import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";
const PostSummaryList = () => {
    return (`
        ${post.map(post => PostSummaryItem(post)).join('')}
    `)
}

export default PostSummaryList;