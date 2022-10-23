import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import 'bootswatch/dist/cyborg/bootstrap.min.css';

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-auto">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-lg-7 col-9"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col  d-none d-lg-block">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter

