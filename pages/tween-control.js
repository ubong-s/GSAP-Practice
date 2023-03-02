import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '../utils/helpers';

export default function TweenControl() {
  const boxRef = useRef(null);
  let tween;

  const play = () => {
    tween.play();
  };
  const pause = () => {
    tween.pause();
  };
  const reverse = () => {
    tween.reverse();
  };
  const restart = () => {
    tween.restart();
  };

  useIsomorphicLayoutEffect(() => {
    tween = gsap.to(boxRef.current, {
      duration: 3,
      x: 500,
      ease: 'linear',
      paused: true,
    });
  });

  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <div className='box red' ref={boxRef}></div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reverse}>Reverse</button>
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </main>
  );
}
