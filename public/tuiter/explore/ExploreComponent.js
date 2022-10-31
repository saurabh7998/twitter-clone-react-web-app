import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (`
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
            <div class="">
                ${PostSummaryList()}
            </div>
    `)
}

export default ExploreComponent;