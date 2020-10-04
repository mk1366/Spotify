import React, { useEffect } from 'react';
import qs from 'query-string';
import ls from 'local-storage';

import api from '../../api';

function Callback() {
   useEffect(() => {
      // parse token from hash, which we got from spotify redirect uri. And store token into localstorage.
      const parsedHash = qs.parse(window.location.hash);
      ls('token', parsedHash.access_token);


      // api.get('/me', { headers: { Authorization: `Bearer ${parsedHash.access_token}` }}).then(({data}) => {
      //    console.log(data);
      // });
   }, []);

   return <div>Callback page</div>
}
export default Callback;