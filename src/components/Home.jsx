import React from 'react';
import Header from './Header';
import Tile from './Tile';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="flex justify-center w-100">
        <div className="grid grid-cols-1 gap-4 mt-4 text-center">
          <Tile title="Quiero ayudar" />
          <Tile title="Necesito ayuda" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
