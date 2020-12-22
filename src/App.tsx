import React, { useState, useEffect, useContext } from 'react';
import Color from 'color';
import Note from './Note';
import CONSTS from './consts';
import Canvas from './Canvas';
import useSynth from './useSynth';
import './App.css';

const ThemeContext = React.createContext(CONSTS.THEMES['dark']);

function App() {
  const [isPlaying, setIsPlaying] = useState(CONSTS.DEFAULT_CONFIG.isPlaying);
  const [headTime, setHeadTime] = useState(CONSTS.DEFAULT_CONFIG.headTime);
  const [masterVolume, setMasterVolume] = useState(CONSTS.DEFAULT_CONFIG.masterVolume);
  const [tempo, setTempo] = useState(CONSTS.DEFAULT_CONFIG.tempo);
  const Synth = useSynth(masterVolume);
  const theme = useContext(ThemeContext);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <main className={'app-main'} style={{background: theme.background}}>
          <div id='bgGradient' className={'bg-gradient'}
            style={{background: `linear-gradient(157.14deg,
            ${theme.background} 12.58%,
            ${theme.accents.secondary} 39.1%,
            ${theme.accents.primary} 86.88%)`}}
            role='presentation' aria-hidden={true}
          />
          <Canvas theme={theme} />
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
