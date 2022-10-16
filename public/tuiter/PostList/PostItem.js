const PostItem = (post) => {
    return (`
        <div class="row border border-secondary p-3">
                <div class="col-2 avatar">
                    <img src="${post.avatarImage}" class="img-fluid rounded-circle"/>
                </div>
                <div class="col text-white">
                    <div>
                        <span>${post.userName}</span>
                        <span><i class="fa-solid fa-circle-check"></i></span>
                        <span class="text-white-50">${post.handleName}</span>
                        <span class="text-white-50"> - ${post.time}</span>
                     </div>
                    <div class="pb-2">${post.heading}</div>
                    <div class="card" style="width: 100%;">
                        <img src="${post.contentImage}" class="card-img-top" alt="...">
                        ${post.contentTitle && post.content ? 
                                `<div class="card-body">
                                    <p class="card-text">
                                        <div class="">
                                            ${post.contentTitle}
                                        </div>
                                        <div class="text-white-50">
                                           ${post.content}
                                        </div>
                                    </p>
                                </div>` : ''
                        }
                    </div>
                    <div class="row text-white-50 pt-3 justify-content-evenly">
                        <div class="col">
                            <span><i class="fa-regular fa-comment"></i></span>
                            <span>${post.replies}</span>
                        </div>
                        <div class="col">
                           <span><i class="fa-solid fa-retweet"></i></i></span>
                           <span>${post.retuits}</span>
                        </div>
                        <div class="col">
                           <span><i class="fa-regular fa-heart"></i></span>
                           <span>${post.likes}</span>
                        </div>
                         <div class="col">
                           <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                        </div>
                    </div>
                </div>
            </div>
    `)
}

export default PostItem;