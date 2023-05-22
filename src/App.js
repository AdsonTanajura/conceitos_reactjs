import React from 'react';

import Header from './Components/Header';
import Amor from './Components/Amor';

function App() {
    return (
    <>
          <Header title="Projects">
            <ul>
              <li>Homepage</li>
              <li>Projects</li>
              <li>User</li>
            </ul>
          </Header>
          <Header title="Use">
            <ul>
              <li>Homepage</li>
              <li>Projects</li>
            </ul>
          </Header>
          <Amor amozinho="Paixão">
            <ul>
              <li>Marília</li>
              <li>Filhos</li>
            </ul>
          </Amor>
    </>
  )
}

export default App;