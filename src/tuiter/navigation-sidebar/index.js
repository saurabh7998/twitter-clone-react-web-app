import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">
                <div>
                    <i className="bi bi-twitter"></i>
                </div>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Explore
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bell-fill"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Notifications
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Messages
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-card-list"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Lists
                    </div>
                </div>
            </a>
            <Link to="/tuiter/profile/" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        Profile
                    </div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="col d-none d-xl-inline">
                        More
                    </div>
                </div>
            </a>
        </div>

    );
}

export default NavigationSidebar;