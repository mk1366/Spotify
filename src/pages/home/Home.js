import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import ls from 'local-storage';
import styled from 'styled-components';

import api from '../../api';
import AlbumItem from '../../components/AlbumItem';

const Container = styled.div`
   padding: 20px;
`;

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

const Albums = styled.div`
   margin-top: 20px;
   display: inline-flex;
   flex-wrap: wrap;
   gap: 20px;
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
      <Container>
         <Input
            type="text"
            placeholder="Search albums"
            value={term}
            onChange={(e) => {
               setTerm(e.target.value);
            }}
         />
         <Albums>
            {albums.map(e => {
               return <AlbumItem data={e} />
            })}
         </Albums>
      </Container>
   )
}
export default Home;