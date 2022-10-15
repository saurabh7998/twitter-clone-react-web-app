const PostSummaryItem = (post) => {
    return (`
        <div class="row border pt-1">
            <div class="col-7 col-md-9">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div>
                    <span class="fw-bolder">${post.userName}</span>
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary"> - ${post.time}</span>
                </div>
                <div class="fw-semibold">
                    ${post.title}
                </div>
                <div class="text-secondary">
                    ${post.tweets}
                </div>
            </div>
            <div class="col-5 col-md-3">
                <img src="${post.image}"
                     class="img-fluid rounded-5 p-1"/>
            </div>
        </div>
    `)
}

export default PostSummaryItem;