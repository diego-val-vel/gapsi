import React, { useState, useEffect } from 'react';
import getWelcomeMessage from '../services/welcomeService';
import Header from './Header';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [welcomeData, setWelcomeData] = useState({ welcomeMessage: '', version: '' });

  useEffect(() => {
    const fetchWelcomeData = async () => {
      try {
        const data = await getWelcomeMessage();
        setWelcomeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWelcomeData();
  }, []);

  return (
    <div>
      <Header />
      <div className="welcome-container">
        <h2 className="welcome-message">{welcomeData.welcomeMessage}</h2>
        <button className="continue-button">Continuar</button>
        <p className="version-text">versión {welcomeData.version}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
