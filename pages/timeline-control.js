import Image from 'next/image';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../utils/helpers';
import { gsap } from 'gsap';

export default function TimelineBasics() {
  const container = useRef(null);
  let timeline;

  const play = () => {
    timeline && timeline.play();
  };
  const pause = () => {
    timeline && timeline.pause();
  };
  const reverse = () => {
    timeline && timeline.reverse();
  };
  const restart = () => {
    timeline && timeline.restart();
  };
  const test = () => {
    timeline && timeline.play('test');
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context((self) => {
      timeline = gsap
        .timeline()
        .from(container.current, { duration: 1, opacity: 0 })
        .from('h1', { duration: 1, opacity: 0, scale: 0, ease: 'back' })
        .add('test')
        .from(
          'span',
          {
            duration: 1,
            opacity: 0,
            y: 160,
            stagger: 0.1,
            ease: 'back',
          },
          '+=0.5'
        )
        .from('p', { duration: 0.8, xPercent: 100, ease: 'bounce' }, '<+0.5');
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div
        style={{
          backgroundColor: 'slateblue',
          textAlign: 'center',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        ref={container}
      >
        <h1
          style={{
            fontSize: '4rem',
          }}
        >
          Meet the Freds
        </h1>
        <p
          style={{
            position: 'absolute',
            top: '2rem',
            right: '0',
            padding: '1rem 2rem',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
          }}
        >
          Sunday, 9pm
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <span>
            <Image src='/fred-1.png' alt='Fred 1' width={100} height={100} />
          </span>
          <span>
            <Image src='/fred-2.png' alt='Fred 2' width={100} height={100} />
          </span>
          <span>
            <Image src='/fred-3.png' alt='Fred 3' width={100} height={100} />
          </span>
          <span>
            <Image src='/fred-4.png' alt='Fred 4' width={100} height={100} />
          </span>
          <span>
            <Image src='/fred-5.png' alt='Fred 5' width={100} height={100} />
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem 0' }}>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reverse}>Reverse</button>
          <button onClick={restart}>Restart</button>
          <button onClick={test}>Test</button>
        </div>
      </div>
    </main>
  );
}
