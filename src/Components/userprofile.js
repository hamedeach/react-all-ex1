import React from "react";
import propTypes from "prop-types";

const UserProfile = props => {
    console.log('*******'+props.profile)
    return(
     <p>
         played {props.profile.playedgames} games
    </p>)
};

UserProfile.propTypes = {
    profile: propTypes.object.isRequired,
};
export default UserProfile;