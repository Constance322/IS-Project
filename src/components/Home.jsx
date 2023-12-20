import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { face, logo } from '../assets';
import GetStarted from './GetStarted';

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      
      <div className={`absolute left-2 top-0 p-6`} style={{ zIndex: 10, borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '45px', borderRadius: '5px', border: '2px solid white', marginRight: '10px' }} />
        <span className="text-a46730 text-2xl font-bold">FACIA</span>
      </div>

      <div className={`absolute right-0 top-0 p-6`} style={{ zIndex: 10 }}>
        <ul className="flex">
          <li className="ml-28 text-a46730 text-white text-2xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-28 text-a46730 text-white text-2xl font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="ml-28 text-a46730 text-white text-2xl font-bold">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} style={{ height: '100%', overflow: 'hidden' }}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" style={{ lineHeight: '1.1' }}>
            Access<br className="sm:block hidden" />{' '}
            <span className="text-gradient">Control with Facial</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mt-4">
          Recognition
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          <span style={{ color: 'white' }}>Strengthening safety measures within Educational Institutions for improved security protocols</span>
        </p>
      </div>

    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} style={{ height: '100%', marginTop: '20px', overflow: 'hidden', marginRight: '-10px' }}>
        <img
          src={face}
          alt="billing"
          className="w-[100%] h-[80%] relative z-[5] mt-[-180] rounded-md"
          style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      
      <div className={`ss:hidden ${styles.flexCenter}`} style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <GetStarted />
      </div>

      
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', fontWeight: 'bold', color: '#a46730' }}>
        &copy; Constance
      </div>
    </section>
  );
};

export default Home;
