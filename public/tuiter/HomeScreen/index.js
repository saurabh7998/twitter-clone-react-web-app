import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostItem from "../PostList/PostItem.js";
import PostList from "../PostList/index.js";

const Explore = () => {
    $('#wd-explore').append(`
      <div class="row mt-2">
        <div class="col-auto ">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-lg-7 col-9 ">
<!--            ${ExploreComponent()}-->
                ${PostList()}   
        </div>
        <div class="col  d-none d-lg-block">
            ${PostSummaryList()}
        </div>
    </div>
   `);
}

Explore();

