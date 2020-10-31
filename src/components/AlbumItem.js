import React from 'react';

function AlbumItem(props) {
   const { data } = props;
   console.log(data);
   return (
      <div>
         <img src={data.images[2].url} />
         <a href={data.external_urls.spotify}>{data.name}</a>
      </div>
   )
}

export default AlbumItem;