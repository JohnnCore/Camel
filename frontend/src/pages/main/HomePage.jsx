import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './HomePage.css';

function HomePage() {
  return (
    <div className="vertical-parallax">
      <Parallax pages={2} scrolling={true}>
        <ParallaxLayer offset={0} speed={1} factor={1} height="100vh" style={{ backgroundColor: 'red' }}>
          <div className="section">
            <h1>Section 1</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={1} factor={1} height="100vh" style={{ backgroundColor: 'blue' }}>
          <div className="section">
            <h1>Section 2</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={0.5} height="100vh" style={{ backgroundColor: 'yellow' }}>
          <div className="section">
            <h1>Section 3</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
