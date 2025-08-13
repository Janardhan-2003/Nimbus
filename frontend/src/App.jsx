
import React, { useEffect, useRef } from 'react';
import Header from "./components/Header.jsx/Header"
import Footer from "./components/Footer/Footer"
import HeroPage from './pages/HeroPage/HeroPage'
import earthVideo from './assets/earth-rotating.mp4';

function App() {

   const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // example: half speed
    }
  }, []);
  return (
    <>
      <video
      ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src={earthVideo}     // make sure file is in public/assets/
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      />
      <div className="relative z-10">
        <Header />
        <HeroPage />
        <Footer />
      </div>
    </>
  )
}

export default App
