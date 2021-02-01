import React from "react";
// add any needed imports here
import {useSelector } from 'react-redux'

function Users() {

  const userNames = useSelector(state => state.users)
  const userLength = useSelector(state => state.users.length)

  // const eachName = userNames.map(user => user.username)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {userNames.map(user => <li>{user.username}</li>)}
        {userLength}

      </ul>
    </div>
  );
}

export default Users;
