import React from 'react';
import styles from '../style';
import { about } from '../assets';
import faciaLogo from '../assets/facia.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section
      id="about"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{ height: '100vh', backgroundColor: '#00040f', color: '#ffffff', overflow: 'hidden' }}
    >
      <div className="flex-1" style={{ borderRadius: '10px', overflow: 'hidden', marginTop: '120px' }}>
        <img
          src={about}
          alt="About"
          style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        style={{ overflowY: 'hidden', marginTop: '60px', marginRight: '0' }}
      >
        <div className="w-full">
          <h1
            className="font-poppins font-semibold text-[52px] leading-[75px]"
            style={{
              background: 'linear-gradient(300deg, #804316, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Face recognition
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our about page delves into the role of facial recognition in educational access control,
            exploring its benefits, ethical considerations, and the evolving landscape of privacy and
            security measures in academic settings.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#a46730',
          }}
        >
          &copy; Constance
        </div>
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
            <a href="login">Login</a>
          </li>
        </ul>
      </div>

      <div className="absolute left-2 top-0 p-6" style={{ zIndex: 10, borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <img
          src={faciaLogo}
          alt="Logo"
          style={{ width: '45px', borderRadius: '5px', border: '2px solid white', marginRight: '10px' }}
        />
        <span className="text-a46730 text-2xl font-bold">FACIA</span>
      </div>
    </section>
  );
};

export default About;
