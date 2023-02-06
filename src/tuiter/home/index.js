import React from "react";
import PostList from "../post-list";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (

        <div className="row">
            {/*home!!!*/}
            {/*<PostList/>*/}
            <WhatsHappening/>
            <TuitsList/>
        </div>

    )
}

export default HomeComponent;