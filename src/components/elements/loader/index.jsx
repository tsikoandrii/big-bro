import React from 'react';
import styled from 'styled-components'

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //background: rgba(256, 256, 256, 0.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .waveform {
    display: inline-flex;
    height: 50px;
    width: 60px;
    gap: 4px;
    align-items: center;
  }

  .wave-bar {
    width: 100%;
    height: 10%;
    background-color: #FFCB46;
    border-radius: 100px;
    animation: waves 250ms linear infinite alternate;
  }

  .wave-bar:nth-child(2) {
    animation-delay: 100ms;
  }

  .wave-bar:nth-child(3) {
    animation-delay: 200ms;
  }

  .wave-bar:nth-child(4) {
    animation-delay: 120ms;
  }

  .wave-bar:nth-child(5) {
    animation-delay: 70ms;
  }

  .wave-bar:nth-child(6) {
    animation-delay: 200ms;
  }

  .wave-bar:nth-child(7) {
    animation-delay: 20ms;
  }

  @keyframes waves {
    from {
      height: 10%;
    }
    to {
      height: 100%;
    }
  }`

const Loader = () => {
    return (
        <StyledLoader className="loader">
            <div className="waveform">
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
            </div>
        </StyledLoader>
    );
};

export default Loader;