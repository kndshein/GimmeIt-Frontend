import React from "react";
import axios from "axios";

const LoggedInProfile = (props) => {
  const [profile, setProfile] = React.useState(null);

  const checkLogin = () => {
    axios
      .get(props.url + "donors/profile", {
        headers: { "auth-token": sessionStorage.getItem("token") },
      })
      .then((response) => setProfile(response.data));
  };

  React.useEffect(() => {
    checkLogin();
  }, []);
  console.log(profile?.items[0].img);
  return (
    <div>
      LoggedInProfile
      <div>{profile?.firstName}</div>
      <div>{profile?.lastName}</div>
      <div>{profile?.username}</div>
      <div>{profile?.email}</div>
      {/* <div>{profile?.items.map(item => {
        return (
          <h1>item name: {item.name}</h1>

        )
      })}
      </div>*/}
      <div className="listed-items-container">
        {profile?.items.map((item, index) => {
          return (
            <div className="card-container">
              <img className="image" src={item.img} alt="desk" />
              <div className="image-text">
                <h2 className="item-cardname">{item.name}</h2>
                <p className="item-description">{item.description}</p>
                <p>{item.available.toString()}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => props.handleLogout()}>Log Out</button>
    </div>
  );
};

export default LoggedInProfile;
