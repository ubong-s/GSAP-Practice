import Image from 'next/image';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../utils/helpers';
import { gsap } from 'gsap';

export default function TimelineBasics() {
  const container = useRef(null);
  const timeline = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context((self) => {
      timeline.current = gsap
        .timeline()
        .from(container.current, { duration: 1, opacity: 0 })
        .from('h1', { duration: 1, opacity: 0, scale: 0, ease: 'back' })
        .from(
          'span',
          {
            duration: 1,
            opacity: 0,
            y: 160,
            stagger: 0.1,
            ease: 'back',
          },
          '+=2'
        )
        .from('p', { duration: 0.8, xPercent: 100 }, '<+0.5');
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
      </div>
    </main>
  );
}
