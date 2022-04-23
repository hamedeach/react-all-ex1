import React from 'react';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.

You'll see this pattern often - a component for a thing and a component for a list
of those things.
*/
const User = props => {
  return <li>{props.userobj.username}</li>;
};

User.propTypes = {
  userobj: PropTypes.object.isRequired,
};

export default User;
