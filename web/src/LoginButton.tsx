import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>Log In</button>;
};

export default LoginButton;