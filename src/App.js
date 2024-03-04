import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';

function App() {
  return (
    <>
      <Router>
        {/* <Router basename={window.location.href.includes('local') ? '' : `${process.env.PUBLIC_URL}`}> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
