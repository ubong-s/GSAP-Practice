import React, { useRef } from 'react';
import styles from '../../styles/scroll-getting-started.module.css';
import { useIsomorphicLayoutEffect } from '../../utils/helpers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: 'header',
    title: 'header',
  },
  {
    id: 'section1',
    title: 'section 1',
  },
  {
    id: 'section2',
    title: 'section 2',
  },
  {
    id: 'section3',
    title: 'section 3',
  },
  {
    id: 'section4',
    title: 'footer',
  },
];

export default function GettingStarted() {
  const container = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.section2 h1', {
        duration: 3,
        x: '-50vw',
        ease: 'linear',
        scrollTrigger: {
          trigger: '.section2 h1',
          markers: true,
          start: 'top 75%',
          end: 'bottom 25%',
          // events: 'onEnter onLeave onEnterBack onLeaveBack'
          toggleActions: 'restart pause reverse reset',
          // options : 'play, pause, resume, reset, restart, complete, reverse, none'
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className={styles.wrap} ref={container}>
        {sections.map(({ id, title }) => (
          <section key={title} className={`${styles.section} ${id}`}>
            <h1>{title}</h1>
          </section>
        ))}
      </div>
    </main>
  );
}
