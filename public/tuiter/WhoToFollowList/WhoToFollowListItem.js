const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <img src="${who.avatarIcon}"
                     class="img-fluid rounded-5 col-3 p-0 wd-acc-img"/>
                <div class="col-6 col-xl-5">
                    <div class="fw-bold">
                        ${who.userName}
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        ${who.handleName}
                    </div>
                </div>
                <div class="col">
                    <button type="button"
                            class="btn btn-primary btn-sm rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;