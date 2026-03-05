import React from 'react';
import './DroneSwarm.css';

export default function DroneSwarm() {
  return (
    <div className="drone-swarm">
      <div className="drone-header">
        <span>DRONE SWARM - STUDENT STARTER</span>
        <span style={{ fontSize: '0.7rem' }}>FORMATION: TODO</span>
      </div>

      <div className="drone-grid">
        <div className="drone active" />
        <div className="drone active" />
        <div className="drone inactive" />
        <div className="drone active" />
      </div>

      <div className="formation-buttons">
        <button className="formation-btn" disabled>grid</button>
        <button className="formation-btn" disabled>skull</button>
        <button className="formation-btn" disabled>heart</button>
      </div>

      <div style={{ fontSize: '0.65rem', color: '#4a5568' }}>
        TODO: listen hacker:command + power:outage, emit drone:formation.
      </div>
    </div>
  );
}