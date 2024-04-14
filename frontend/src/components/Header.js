import React from 'react';
import Logo from '../../src/logo.png';

const Header = () => (
  <header style={styles.headerContainer}>
    <img src={Logo} alt="Logo Gapsi" style={styles.logo} />
    <h1 style={styles.title}>e-Commerce Gapsi</h1>
  </header>
);

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#ffffff',
    padding: '10px 20px',
  },
  logo: {
    height: '50px',
    marginRight: '10px',
  },
  title: {
    margin: 0,
    color: '#000000',
  },
};

export default Header;
