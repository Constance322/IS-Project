import React from 'react';
import styles from './style';
import { Home, About, Register, Login} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Security from './components/Security';

const App = () => (
  <Router>
    <div className="bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />           
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />           
            <Route path="/security" element={<Security />} />
            
            </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
