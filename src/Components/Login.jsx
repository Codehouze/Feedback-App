import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken.js";
// import Button from "../Components/shared/Button";

const clientId ="551832245815-02oa8mcaeemfmb7ah5lopvq4hvghmvq8.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log(`[Login Success] currentUser:`, res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log(`[login Failed] res:`, res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_hosted_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
