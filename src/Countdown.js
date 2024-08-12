import React from "react";
import Countdown from 'react-countdown';

const InternalCountdown = ({timer}) => {
    return (
        <>
        <h2>Toggle Visibility of Banner</h2>
    <Countdown date={Date.now() + timer} /></>)
}

export default InternalCountdown;