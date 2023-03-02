import { gsap } from 'gsap';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../utils/helpers';

export default function SpecialPropRepeat() {
  const container = useRef(null);
  const blueRef = useRef(null);
  const redRef = useRef(null);

  // Using context
  // useIsomorphicLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to('.box', {
  //       duration: 2,
  //       x: 600,
  //       stagger: 2,
  //     });
  //   }, container);
  // });

  // using Refs
  useIsomorphicLayoutEffect(() => {
    gsap.to(redRef.current, {
      duration: 3,
      x: 600,
      ease: 'back',
    });
    gsap.to(blueRef.current, {
      duration: 3,
      x: 600,
      ease: 'elastic',
    });
  });
  return (
    <main>
      <div ref={container}>
        <div className='box red' ref={redRef}></div>
        <div className='box blue' ref={blueRef}></div>
      </div>
    </main>
  );
}
