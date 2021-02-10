import React from "react";
import axios from "axios";

const LoggedInProfile = (props) => {
  const [profile, setProfile] = React.useState(null);

  const checkLogin = () => {
    axios
      .get("http://localhost:4000/donors/profile", {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((response) => setProfile(response.data));
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      LoggedInProfile
      <div>{profile?.firstName}</div>
      <div>{profile?.lastName}</div>
      <div>{profile?.username}</div>
      <div>{profile?.email}</div>
      <button onClick={() => props.handleLogout()}>Log Out</button>
    </div>
  );
};

export default LoggedInProfile;
