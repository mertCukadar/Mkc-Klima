import React, { useState, useEffect } from 'react';
import { GreetingShow } from './Components/greetingLogo/GreetingShow';
import { Header } from './Components/header/Header';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible ? (
        <GreetingShow />
      ) : (
          <Header />
      )}
    </>
  );
}

export default App;
