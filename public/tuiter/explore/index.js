import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

const exploreComponent = () => {
    $('#wd-explore').append(`
      <div class="row mt-2">
        
        <div class="col-auto ">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-lg-7 col-9 ">
            <div class="row">
                <div class="col-12 wd-searchPanel">
                    <div
                            class="input-group rounded position-relative">
                        <input type="search"
                               class="form-control rounded-pill wd-searchbar"
                               placeholder="Search Tuiter"
                               aria-label="Search Tuiter"
                               aria-describedby="search-addon" width="100%"/>
                        <i class="fa-solid fa-magnifying-glass wd-searchIcon"></i>
                    </div>
                    <a href="explore-settings.html">
                        <i class="fa-solid fa-gear fa-xl wd-settingsIcon"></i>
                    </a>

                </div>
                <!--                <div class="col settings">-->
                <!--                    -->
                <!--                </div>-->
            </div>

            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page"
                       href="#">For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item d-none d-sm-block ">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link " href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="position-relative">
                <img src="../../images/spacex_starship.png"
                     class="img-fluid mt-2 wd-spacex"
                     alt="spaceX starship image">
                <p class="h2 text-white position-absolute bottom-0 ">SpaceX's
                    Starship</p>
            </div>
            <div class="container">
                <div class="row border pt-1">
                    <div class="col-7 col-md-9">
                        <div class="text-secondary">
                            Web Development
                        </div>
                        <div>
                            <span class="fw-bolder">ReactJs</span>
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="text-secondary"> - 2h</span>
                        </div>
                        <div class="fw-semibold">
                            React.js is a component based front end library
                            that makes it very easy to build Single Page
                            Application or SPAs
                        </div>
                    </div>
                    <div class="col-5 col-md-3">
                        <img src="../../images/reactLogo.png"
                             class="img-fluid rounded-5 p-1"/>
                    </div>
                </div>
                <div class="row border pt-1">
                    <div class="col-7 col-md-9">
                        <div>
                            <span class="fw-bolder">JavaScript</span>
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="text-secondary"> - 2h</span>
                        </div>
                        <div class="fw-semibold">
                            JavaScript is a programming language that can run
                            on browser as well as on desktops
                        </div>
                        <div class="text-secondary">
                            123K Tuits
                        </div>
                    </div>
                    <div class="col-5 col-md-3">
                        <img src="../../images/jsLogo.png"
                             class="img-fluid rounded-5 p-1"/>
                    </div>
                </div>
                <div class="row border pt-1">
                    <div class="col-7 col-md-9">
                        <div class="text-secondary">
                            Web Development
                        </div>
                        <div class="fw-bolder">
                            NodeJS
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="text-secondary">
                            134K Tuits
                        </div>
                    </div>
                    <div class="col-5 col-md-3">
                        <img src="../../images/nodeLogo.png"
                             class="img-fluid rounded-5 p-1"/>
                    </div>
                </div>
                <div class="row border pt-1 mb-1">
                    <div class="col-7 col-md-9">
                        <div class="text-secondary">
                            Web Development
                        </div>
                        <div class="fw-bolder">
                            MongoDB
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="text-secondary">
                            100K Tuits
                        </div>
                    </div>
                    <div class="col-5 col-md-3">
                        <img src="../../images/mongoLogo.png"
                             class="img-fluid rounded-5 p-1"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="col  d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
    </div>
   `);
}

export default exploreComponent();

