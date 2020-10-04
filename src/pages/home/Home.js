import React from 'react';

function Home() {
   return <div>{JSON.stringify(process.env, null, 2)}</div>
}
export default Home;