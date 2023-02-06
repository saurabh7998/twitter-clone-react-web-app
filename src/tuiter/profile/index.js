import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Profile = () => {
    const userInfo = useSelector((state) => state.profile)[0]
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-10">
                    <p className="h4 m-0">{userInfo.name}</p>
                    <div className="text-secondary">50 Tuits</div>
                </div>
            </div>
            <div className="row">
                <img src={userInfo.bannerPicture}/>
                <div className="wd-inline-block">
                    <img src={userInfo.profilePicture}
                         className="img-fluid rounded-circle w-25 wd-overlap-profile-img"/>
                    <button type="button"
                            className="btn btn-sm btn-outline-secondary mt-2 float-end rounded-pill"
                            onClick={() => navigate('/tuiter/edit-profile')}
                    >
                        Edit
                        Profile
                    </button>
                </div>

            </div>
            <div className="row">
                <p className="h4 fw-bolder m-0">{userInfo.name}</p>
                <p className="h6 text-secondary">@{userInfo.handle}</p>
            </div>
            <div className="row mt-3">
                <p>{userInfo.bio}</p>
            </div>
            <div className="row">
                <div className="wd-inline-block text-secondary">
                    <span className="pe-3"><i
                        className="bi bi-geo-alt"></i> {userInfo.location}</span>
                    <span className="pe-3"><i
                        className="bi bi-balloon"></i> {userInfo.dateOfBirth}</span>
                    <span className="pe-3"><i
                        className="bi bi-calendar-event"></i> {userInfo.dateJoined}</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="wd-inline-block">
                    <span className="pe-3"><b>{userInfo.followingCount}</b> Following</span>
                    <span className="pe-3"><b>{userInfo.followersCount}</b> Followers</span>
                </div>
            </div>

        </div>
    )
}

export default Profile