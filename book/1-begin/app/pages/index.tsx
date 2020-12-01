import React from 'react';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Index Page</title>
      <meta name="description" content="This is a description"></meta>
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '35px', height: '100%', color: '#222' }}>
      <p>See this content on Index page</p>
    </div>
  </div>
);

export default Index;
