import React from 'react';
import Header from '../components/home-page-components/header-component';

const Home = () => {
    return (
      <>
        <Header />
        <div>
          <h1>Welcome to My Pokemon Website</h1>
          <p>This is a simple home page built with React.</p>
          <p>Feel free to explore!</p>
        </div>
      </>
  );
};

export default Home;