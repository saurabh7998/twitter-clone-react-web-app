import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

const Explore = () => {
    $('#wd-explore').append(`
      <div class="row mt-2">
        <div class="col-auto ">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-lg-7 col-9 ">
            ${ExploreComponent()}
        </div>
        <div class="col  d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
    </div>
   `);
}

Explore();

