import React from 'react';
import styled from 'styled-components';
import qs from 'query-string';

const LoginButton = styled.div`
   background: green;
   display: inline-block;
   padding: 5px 10px 5px 10px;
   border-radius: 3px;
   box-shadow: 1px 2px 4px grey;
`;

function Login() {
   const handleLogin = () => {
      // redirect to spotify authorize server with client id and redirect uri 
      // https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
      window.location = `https://accounts.spotify.com/authorize?${qs.stringify({
         client_id: process.env.REACT_APP_CLIENT_ID,
         redirect_uri: process.env.REACT_APP_REDIRECT_URL,
         response_type: 'token',
      })}`;
   }

   return <div>
      <LoginButton onClick={handleLogin} >Login</LoginButton>
   </div>
}
export default Login;