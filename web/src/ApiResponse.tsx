import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const ApiResponse = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [data, setData] = useState<null | object>(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const tokenResponse = await getAccessTokenSilently({
          audience: `http://domdomegg.github.io/20220502-test`,
          scope: "read:messages",
          detailedResponse: true,
        });

        console.log(tokenResponse.scope)

        setAccessToken(tokenResponse.access_token)
      } catch (e) {
        console.log(e);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  useEffect(() => {
    if (accessToken) {
      fetch('http://localhost:3001/api/private-scoped', {
        "headers": {
          "authorization": "Bearer " + accessToken,
        },
      })
        .then(r => r.json())
        .then(d => setData(d))
    }
  }, [setData, accessToken])

  return <>
    <p>{accessToken}</p>
    <p>{JSON.stringify(data)}</p>
  </>
}

export default ApiResponse;