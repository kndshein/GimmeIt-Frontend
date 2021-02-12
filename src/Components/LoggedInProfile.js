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

  return (
    <div>
      <div className="profile-info">
        {/* <h2>First Name: {profile?.firstName}</h2>
        <h2>Last Name: {profile?.lastName}</h2> */}
        <h2>{profile?.username}</h2>
        <h3>Email: {profile?.email}</h3>
      </div>
      <h2 className="listed-items-container">
        <div className="selling-items-container">
          Selling
          {profile?.items.map((item, index) => {
            if (item.available)
              return (
                <div className="card-container">
                  <img className="image" src={item.img} alt={item.name} />
                  <div className="image-text">
                    <p className="item-cardname">{item.name}</p>
                    <p className="item-description">{item.description}</p>
                    <p>{item.available.toString()}</p>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="sold-items-container">
          Sold
          {profile?.items.map((item, index) => {
            if (item.shipping[0])
              return (
                <div className="card-container">
                  <img className="image" src={item.img} alt="desk" />
                  <div className="image-text">
                    <h2 className="item-cardname">{item.name}</h2>
                    <p className="item-description">{item.description}</p>
                    <p>{item.available.toString()}</p>
                    <div>
                      <p>{item.shipping[0]?.firstName}</p>
                      <p>{item.shipping[0]?.lastName}</p>
                      <p>{item.shipping[0]?.addressStreet}</p>
                      <p>{item.shipping[0]?.addressCity}</p>
                      <p>{item.shipping[0]?.addressState}</p>
                      <p>{item.shipping[0]?.addressZipcode}</p>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </h2>
      <button onClick={() => props.handleLogout()}>Log Out</button>
    </div>
  );
};

export default LoggedInProfile;
