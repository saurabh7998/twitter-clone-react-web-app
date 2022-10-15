const NavigationSidebar = () => {
    return (`
        <div class="list-group">
                <a href=""
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-house-chimney"></i>
                        </div>
                        <div
                                class="col d-none d-xl-inline">
                            Home
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action active"
                   aria-current="true">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Messages
                        </div>
                    </div>
                </a>
                <a class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-list"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Lists
                        </div>
                    </div>
                </a>
                <a class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            Profile
                        </div>
                    </div>
                </a>
                <a class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <div class="col d-none d-xl-inline">
                            More
                        </div>
                    </div>
                </a>

                <button type="button" class="btn btn-primary rounded-pill mt-2">
                    Tuit
                </button>
            </div>
    `)
}

export default NavigationSidebar;