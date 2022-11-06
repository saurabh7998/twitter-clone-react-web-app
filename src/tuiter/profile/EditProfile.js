import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveNewProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router";

const EditProfile = () => {
    const userInfo = useSelector((state) => state.profile)[0]

    const [name, setName] = useState(userInfo.name)
    const [bio, setBio] = useState(userInfo.bio)
    const [location, setLocation] = useState(userInfo.location)
    const [website, setWebsite] = useState(userInfo.website)
    const [dateOfBirth, setBirthDate] = useState(userInfo.dateOfBirth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveEdits = () => {
        dispatch(saveNewProfile({
                                    name: name,
                                    bio: bio,
                                    website: website,
                                    location: location,
                                    dateOfBirth: dateOfBirth,
                                }))
        navigate("/tuiter/profile")

    }

    return (
        <div className="container">
            <div className="row m-3">
                <div className="col-2">
                    <button type="button" className="btn-close"
                            aria-label="Close"
                            onClick={() => navigate("/tuiter/profile")}>
                    </button>
                </div>
                <div className="col-8">
                    <p className="h4">Edit Profile</p>
                </div>
                <div className="col-2">
                    <button type="button"
                            className="btn rounded-pill btn-dark ps-4 pe-4"
                            onClick={saveEdits}
                    >
                        Save
                    </button>
                </div>
            </div>
            <div className="row">
                <img src={userInfo.bannerPicture}/>
                <div className="wd-inline-block">
                    <img src={userInfo.profilePicture}
                         className="img-fluid rounded-circle w-25 wd-overlap-profile-img"/>
                </div>
            </div>
            <div className="row">
                <div className="form-floating mb-4">
                    <input type="text" className="form-control"
                           id="floatingInputGrid" placeholder="Full Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid" className="ms-2">Name</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control"
                           id="floatingInputGrid" placeholder=""
                           value={bio}
                           onChange={(e) => setBio(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid" className="ms-2">Bio</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control"
                           id="floatingInputGrid" placeholder=""
                           value={location}
                           onChange={(e) => setLocation(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid" className="ms-2">Location</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control"
                           id="floatingInputGrid" placeholder=""
                           value={website}
                           onChange={(e) => setWebsite(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid" className="ms-2">Website</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="text" className="form-control"
                           id="floatingInputGrid" placeholder=""
                           value={dateOfBirth}
                           onChange={(e) => setBirthDate(e.target.value)}
                    />
                    <label htmlFor="floatingInputGrid" className="ms-2">Birth Date</label>
                </div>
            </div>
        </div>
    )

}

export default EditProfile