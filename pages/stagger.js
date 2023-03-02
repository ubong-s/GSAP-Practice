import gsap from 'gsap';
import Image from 'next/Image';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../utils/helpers';

export default function Stagger() {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('span', {
        y: -100,
        stagger: {
          each: 0.2,
          from: 'edges', // end, center, edges
          // amount: 1,
        },
      });
    }, container);
  });

  return (
    <main>
      <div className='stagger-wrap' ref={container}>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={30} />
        </span>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={30} />
        </span>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={30} />
        </span>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={30} />
        </span>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={30} />
        </span>
      </div>
    </main>
  );
}
