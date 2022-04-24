import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './userprofile';

class User extends Component {

  state ={
    IsProfileDisplayed :true,
  }

  OnClickProfileBtn = event => 
  {
    this.setState((prevstate) => ({
      IsProfileDisplayed: ! prevstate.IsProfileDisplayed
  }))

  }


  render() {
    return (
      <li>
        {this.props.userobj.username}
        <span>
          <UserProfile profile={this.props.profileobj} isprofiledisplayed={this.state.IsProfileDisplayed}  onclickFunc={this.OnClickProfileBtn}/>
        </span>

      </li>
    )
  };
}

User.propTypes = {
  userobj: PropTypes.object.isRequired,
};

export default User;
