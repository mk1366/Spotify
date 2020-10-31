import React, { useEffect } from 'react';
import qs from 'query-string';
import ls from 'local-storage';
import { useHistory } from "react-router-dom";

import api from '../../api';

function Callback() {
   const history = useHistory();


   useEffect(() => {
      // parse token from hash, which we got from spotify redirect uri. And store token into localstorage.
      const parsedHash = qs.parse(window.location.hash);

      // if we get token, save into localstorage
      if (parsedHash.access_token) {
         ls('token', parsedHash.access_token);  
         
         // redirect to home page
         history.replace('/');
      }
      
   }, []);

   return <div>Callback page</div>
}
export default Callback;