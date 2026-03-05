import React, { useEffect, useState } from 'react';
import './DroneSwarm.css';
import { eventBus } from '../../eventBus';

export default function DroneSwarm() {
  const [formation, setFormation] = useState('grid');

  const commandMap = {
    storm: 'chaos',
    drones: 'skull',
    riot: 'X',
    love: 'heart',
    off: 'off',
    reset: 'grid'
  };

  // Fonction unique pour changer de formation (Factorisation)
  const changeFormation = (newFormation) => {
    console.log(`Setting ${newFormation} formation`);
    eventBus.emit('drone:formation', newFormation);
    setFormation(newFormation);
  };

  useEffect(() => {
    const handleCommand = (command) => {
      console.log('Received hacker:command', command);
      const targetFormation = commandMap[command];
      if (targetFormation) {
        changeFormation(targetFormation);
      }
    };

    eventBus.on('hacker:command', handleCommand);

    return () => {
      eventBus.off('hacker:command', handleCommand);
    };
  }, []);

  return (
      <div className="drone-swarm">
        <div className="drone-header">
          <span>DRONE SWARM - SYSTEM</span>
          <span style={{ fontSize: '0.7rem' }}>FORMATION: {formation.toUpperCase()}</span>
        </div>

        <div className="drone-grid">
          {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className={`drone ${formation}`} />
          ))}
        </div>

        <div className="formation-buttons">
          <button className="formation-btn" onClick={() => changeFormation('grid')}>grid</button>
          <button className="formation-btn" onClick={() => changeFormation('skull')}>skull</button>
          <button className="formation-btn" onClick={() => changeFormation('heart')}>heart</button>
          <button className="formation-btn" onClick={() => changeFormation('X')}>x</button>
          <button className="formation-btn" onClick={() => changeFormation('chaos')}>chaos</button>
          <button className="formation-btn" onClick={() => changeFormation('off')}>off</button>
        </div>
      </div>
  );
}