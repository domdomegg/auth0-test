import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    if (user) {
      const getUserMetadata = async () => {
        const domain = "dev-yiiznn0y.us.auth0.com";

        try {
          const accessToken = await getAccessTokenSilently({
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          });

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const { user_metadata } = await metadataResponse.json();

          setUserMetadata(user_metadata);
        } catch (e) {
          console.log(e);
        }
      };

      getUserMetadata();
    }
  }, [getAccessTokenSilently, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated && !!user) {
    return (
      <div>
        <p>You are:</p>
        {/* <img src={user.picture} alt={user.name} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <p>{JSON.stringify(user)}</p> */}
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  }

  return (
    <div>
      <p>You are:</p>
      <h2>Not authenticated</h2>
    </div>
  )
};

export default Profile;