import React from "react";
import "./index.css";

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-10">
                    <p className="h4 m-0">Saurabh Gade</p>
                    <div className="text-secondary">50 Tuits</div>
                </div>
            </div>
            <div className="row">
                <img src="/images/cover.png"/>
                <div className="wd-inline-block">
                    <img src="/images/avatar.png"
                         className="img-fluid rounded-circle w-25 wd-overlap-profile-img"/>
                    <button type="button"
                            className="btn btn-sm btn-outline-secondary mt-2 float-end rounded-pill">Edit
                        Profile
                    </button>
                </div>

            </div>
            <div className="row">
                <p className="h4 fw-bolder m-0">Saurabh Gade</p>
                <p className="h6 text-secondary">@saurabh7998</p>
            </div>
            <div className="row mt-3">
                <p>Student, MS Computer Science @ Khoury College of Computer Sciences.</p>
            </div>
            <div className="row">
                <div className="wd-inline-block text-secondary">
                    <span className="pe-3"><i className="bi bi-geo-alt"></i> Boston</span>
                    <span className="pe-3"><i className="bi bi-balloon"></i> Born September 07, 1998</span>
                    <span className="pe-3"><i
                        className="bi bi-calendar-event"></i> Joined January 2009</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="wd-inline-block">
                    <span className="pe-3"><b>731</b> Following</span>
                    <span className="pe-3"><b>509</b> Followers</span>
                </div>
            </div>

        </div>
    )
}

export default Profile