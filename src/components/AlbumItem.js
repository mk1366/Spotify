import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   background-color: rgb(24, 24, 24);
   width: 210px;
   height: 280px;
   position: relative;
   cursor: pointer;
`;

const ImageContainer = styled.div`
   height: 210px;
   padding: 20px;
   box-sizing: border-box;

   > img {
      width: 100%;
   }
`;

const Title = styled.div`
   line-height: 50px;
   padding-left: 20px;
   padding-right: 20px;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   color: lightgray;
`;


function AlbumItem(props) {
   const { data } = props;
   console.log(data);
   return (
      <Container
         onClick={() => {
            window.open(data.external_urls.spotify, '_blank');
         }}
      >
         <ImageContainer>
            <img src={data.images[1].url} />
         </ImageContainer>
         <Title>{data.name}</Title>
      </Container>
   )
}

export default AlbumItem;