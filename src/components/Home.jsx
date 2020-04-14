import React from 'react';
import Header from './Header';
import Tile from './Tile';
import AyudarIcon from '../assets/AyudarIcon';
import NecesitoAyudaIcon from '../assets/NecesitoAyudaIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto">
        <div className="mt-10 mb-8 mx-5 text-xs text-text-main leading-4">
          Descripción de lo que hacemos y porque. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquet massa pharetra, convallis proin.
          In purus arcu sit nisi gravida leo sit.
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 text-center">
          <div className="flex justify-center">
            <Link to="canHelp">
              <Tile title="Quiero ayudar">
                <AyudarIcon />
              </Tile>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="needHelp">
              <Tile title="Necesito ayuda">
                <NecesitoAyudaIcon />
              </Tile>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
