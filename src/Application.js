import React from 'react';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

const Application = () => {
  return (
    <React.StrictMode>
      <div className="wrapper">
        <div className={'wrapper'}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Application;
