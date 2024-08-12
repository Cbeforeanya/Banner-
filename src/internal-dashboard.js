import * as React from 'react';
import InternalCountdown from './Countdown';
import InternalSwitch from './Switch';

export default function InternalDashboard({handleToggle,timer}) {
  return (
    <>
        <h1>Internal Dashboard</h1>
        <div style={{'display':'flex','flexDirection':'column'}}>
        <InternalSwitch handleToggle={handleToggle}></InternalSwitch>
        <InternalCountdown timer={timer}></InternalCountdown>
        </div>
    </>
  );
}
