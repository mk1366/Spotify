import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import ls from 'local-storage';
import styled from 'styled-components';

import api from '../../api';
import AlbumItem from '../../components/AlbumItem';

const Input = styled.input`
   height: 40px;
   padding: 0;
   margin: 0;
   width: 360px;
   padding-left: 20px;
   padding-right: 20px;
   border: 1px solid gray;
   border-radius: 40px;
`;

function Home() {
   const [term, setTerm] = useState("");
   const [albums, setAlbums] = useState([]);

   useEffect(() => {
      // on term changes call search API and get list of albums
      api.get(`/search?${qs.stringify({
         q: term,
         type: 'album',
         limit: 20,
      })}`, { headers: { Authorization: `Bearer ${ls('token')}`, } })
         .then((e) => {
            setAlbums(e.data.albums.items);
          })
         .catch(e => {
            console.log(e);
         })
    }, [term]);

   return (
      <div>
         <Input
            type="text"
            placeholder="Search albums"
            value={term}
            onChange={(e) => {
               setTerm(e.target.value);
            }}
         />
         <div>
            {albums.map(e => {
               return <AlbumItem data={e} />
            })}
         </div>
      </div>
   )
}
export default Home;