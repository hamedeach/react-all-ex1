import React from "react";
import propTypes from "prop-types";

const UserProfile = props => {
    return (
        <div>
            {
                props.isprofiledisplayed ?
                    (
                        <div>
                            <p>
                                played {props.profile.playedgames} games
                            </p>
                            <button className='button-link' onClick={props.onclickFunc}>Hide the profile</button>
                        </div>
                    )
                    :
                    (
                        <button className='button-link' onClick={props.onclickFunc}>show the profile</button>
                    )



            }


        </div>
    )
};



UserProfile.propTypes = {
    isprofiledisplayed: propTypes.bool.isRequired,
    profile: propTypes.object.isRequired,
    onclickFunc :propTypes.func.isRequired,

};
export default UserProfile;