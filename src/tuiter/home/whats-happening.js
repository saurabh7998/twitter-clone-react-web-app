import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTuit} from "../reducers/home-tuits-reducer";
import {createTuitThunk} from "../../services/tuits-thunks";

const WhatsHappening = () => {
    const [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch()

    const userInfo = useSelector((state) => state.profile)[0]
    const tuitClickHandler = () => {
        const newTuit = {
            "userName": userInfo.name,
            "handleName": userInfo.handle,
            "avatarImage": userInfo.profilePicture,
            "content": whatsHappening,
            "likes": 0,
        }
        dispatch(createTuitThunk(newTuit))
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src={userInfo.profilePicture} width={60}/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                          className="form-control border-0"
                          onChange={(event) => setWhatsHappening(
                              event.target.value)}>
                </textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;

