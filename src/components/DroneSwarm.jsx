import React, { useEffect, useState } from 'react';
import './DroneSwarm.css';

export default function DroneSwarm() {
  const statusClasses = {
    heart: 'heart',
    skull: 'skull',
    X: 'X',
    chaos: 'chaos',
    off: 'off'
  };

  const [formation, setFormation] = useState('grid');

  useEffect(() => {
    console.log('DroneSwarm mounted');
    
    //Commandes écoutées

    /* eventBus.on('hacker:command', (command) => {
      console.log('Received hacker:command', command);
      if (command === 'storm') {
        setChaosFormation();
      }else if (command === 'drones') {
        setSkullFormation();
      }else if (command === 'riot') {
        setXFormation();
      }else if (command === 'love') {
        setHeartFormation();
      }else if (command === 'off') {
        setOffFormation();
      }else if (command === 'reset') {
        setGridFormation();
      }
    });
    */
    return () => {
      console.log('DroneSwarm unmounted');
      //eventBus.off('hacker:command');S
    };
  }, []);


  function setGridFormation() {
    console.log('Setting grid formation');
    //    eventBus.emit('drone:formation', 'grid');
    setFormation('grid');
  }

  function setSkullFormation() {
    console.log('Setting skull formation');
    //    eventBus.emit('drone:formation', 'skull');
    setFormation('skull');
  }

  function setHeartFormation() {
    console.log('Setting heart formation');
    //    eventBus.emit('drone:formation', 'heart');
    setFormation('heart');
  }

  function setXFormation() {
    console.log('Setting X formation');
    //    eventBus.emit('drone:formation', 'X');
    setFormation('X');
  }

  function setChaosFormation() {
    console.log('Setting chaos formation');
    //    eventBus.emit('drone:formation', 'chaos');
    setFormation('chaos');
  }

  function setOffFormation() {
    console.log('Setting off formation');
    //    eventBus.emit('drone:formation', 'off');
    setFormation('off');
  }

  return (
    <div className="drone-swarm">
      <div className="drone-header">
        <span>DRONE SWARM - STUDENT STARTER</span>
        <span style={{ fontSize: '0.7rem' }}>FORMATION: {formation}</span>
      </div>

      <div className="drone-grid">
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone active" />
      </div>

      <div className="formation-buttons">
        <button className="formation-btn" onClick={() => setGridFormation()}>grid</button>
        <button className="formation-btn" onClick={() => setSkullFormation()}>skull</button>
        <button className="formation-btn" onClick={() => setHeartFormation()} >heart</button>
        <button className="formation-btn" onClick={() => setXFormation()} >x</button>
        <button className="formation-btn" onClick={() => setChaosFormation()} >chaos</button>
        <button className="formation-btn" onClick={() => setOffFormation()} >off</button>
      </div>

      <div style={{ fontSize: '0.65rem', color: '#4a5568' }}>
        TODO: listen hacker:command + power:outage, emit drone:formation.
      </div>
    </div>
  );
}