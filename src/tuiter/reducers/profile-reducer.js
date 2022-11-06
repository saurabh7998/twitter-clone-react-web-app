import {createSlice} from "@reduxjs/toolkit";

const initialState = [{
    name: "Saurabh Gade",
    handle: "saurabh7998",
    profilePicture: '/images/avatar.png',
    bannerPicture: "/images/cover.png",
    bio: 'Student, MS Computer Science @ Khoury College of Computer Sciences.',
    website: 'github.com/saurabh7998',
    location: 'Boston, MA',
    dateOfBirth: '07 September, 1998',
    dateJoined: '04 July, 2009',
    followingCount: 509,
    followersCount: 731,

}];

const profileReducer = createSlice({
                                       name: "profile",
                                       initialState: initialState,
                                       reducers: {
                                           saveNewProfile(state, action) {
                                               state.shift();
                                               state.push({
                                                              name: action.payload.name,
                                                              handle: "saurabh7998",
                                                              profilePicture: '/images/avatar.png',
                                                              bannerPicture: "/images/cover.png",
                                                              bio: action.payload.bio,
                                                              website: action.payload.website,
                                                              location: action.payload.location,
                                                              dateOfBirth: '07 September, 1998',
                                                              dateJoined: '04 July, 2009',
                                                              followingCount: 509,
                                                              followersCount: 731,
                                                          })
                                           }
                                       }
                                   })

export const {saveNewProfile} = profileReducer.actions
export default profileReducer.reducer