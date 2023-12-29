import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import CommonContext from './contexts/CommonContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contextState, setContextState] = useState({
    isDarkTheme: false,
    toast: {
      message: ""
    }
  });
  return (
    <CommonContext.Provider value={{contextState, setContextState}}>
      <div className={`App theme ${contextState.isDarkTheme ? `dark-theme` : ``}`}> {/* dark-theme */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className='container'>
          <Home />
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={contextState.isDarkTheme?"dark":"light"}
      />
    </CommonContext.Provider>
  );
}

export default App;
