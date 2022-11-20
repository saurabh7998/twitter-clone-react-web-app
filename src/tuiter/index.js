import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import homeTuitsReducer from "./reducers/home-tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import Profile from "./profile";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./profile/EditProfile";

const store = configureStore({
                                 reducer: {
                                     who: whoReducer,
                                     tuits: tuitsReducer,
                                     homeTuits: homeTuitsReducer,
                                     profile: profileReducer,
                                 }
                             })

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-auto">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-lg-7 col-9"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="col  d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>

    );
}

export default Tuiter

