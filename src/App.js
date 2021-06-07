import { Helmet } from 'react-helmet'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Git Workflow Demo</title>
        <meta name="description" content="environment-based branching strategy" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="title" />
        <meta property="og:url" content="https://blog.foundy.io" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
