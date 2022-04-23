import React from 'react';
import User from './user';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const UsersList = props => {
  return (
    <div>
      <p>Users</p>
      <ol >{props.users.map((user, index) => <User key={index} userobj={user} />)}</ol>
    </div>
  );
};

UsersList.propTypes = {
  users : PropTypes.array.isRequired,
};

export default UsersList;
