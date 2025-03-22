import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <div>Welcome {user.username}</div>
      <p>Your Age is : {user.userage}</p>
    </div>
  );
}

export default Profile;
