import React from 'react';
import MainRoutes from './Routes';
import Navbar from './components/NavBar/Navbar'

import "./styles.css";

function App() {
  return (
    <div className="app">
              {/* {Navbar} */}
              <Navbar/>

             {/* {Inner container} */}
             <MainRoutes />
      </div>
  );
}

export default App;
