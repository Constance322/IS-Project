import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { logo } from '../assets';

const Login = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // ... (existing code)

const handleLogin = async () => {
  try {
    const response = await axios.post(
      'http://localhost:5000/login',
      {
        name,
        id,
        admin: isAdmin,
        security: isSecurity,
      },
      {
        withCredentials: true,
      }
    );

    if (response.data.error) {
      setLoginMessage(`Login failed: ${response.data.error}`);
    } else {
      setLoginMessage('Login successful');
      // Redirect to the appropriate page
      window.location.href = response.data.redirect;
    }
  } catch (error) {
    console.error(error);
    setLoginMessage('An error occurred during login');
  }
};

// ... (existing code)

  

  return (
    <section
      id="login"
      className={`flex md:flex-row flex-col items-center justify-center`}
      style={{
        height: '100vh',
        overflow: 'hidden',
        background:
          'linear-gradient(225deg, #e1b78c 0deg, #d9a875 60deg, #c78e5a 120deg, #b57b45 180deg, #a46730 240deg, #804316 300deg, #804316 360deg)',
      }}
    >
      <div className={`absolute left-10 top-0 p-6`}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '30px' }} />
        </Link>
      </div>

      <div
        className={`ml-0 absolute left-24 top-0 p-6 text-a46730 text-white text-2xl font-bold`}
        style={{ zIndex: 10 }}
      >
        FACIA
      </div>

      <div className={`absolute right-0 top-0 p-6`} style={{ zIndex: 10 }}>
        <ul className="flex">
          <li className="ml-28 text-a46730 text-white text-2xl font-bold">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center" style={{ height: '100%' }}>
        <h1 className="font-bold text-white text-4xl mb-6" style={{ color: '#804316' }}>
          Login
        </h1>

        <div
          className="rounded-lg p-6 flex flex-col items-start bg-opacity-25 backdrop-blur-md"
          style={{
            backgroundColor: '#e1b78c',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-black text-lg font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="id" className="text-black text-lg font-bold mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="p-2 rounded"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="admin"
              className="mr-2"
              style={{ color: 'black' }}
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            <label htmlFor="admin" className="text-black text-lg font-bold">
              Admin
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="security"
              className="mr-2"
              style={{ color: 'black' }}
              checked={isSecurity}
              onChange={() => setIsSecurity(!isSecurity)}
            />
            <label htmlFor="security" className="text-black text-lg font-bold">
              Security Personnel
            </label>
          </div>

          <button
            onClick={handleLogin}
            className="rounded-lg bg-804316 text-black p-3 font-bold text-2xl"
            style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
          >
            Login
          </button>
          <p>{loginMessage}</p>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#a46730',
        }}
      >
        &copy; Constance
      </div>
    </section>
  );
      }

  export default Login;
      
