import React, { useRef } from 'react';
import styles from '../../styles/pinning-pin-spacing.module.css';
import { useIsomorphicLayoutEffect } from '../../utils/helpers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
    title: 'section 4',
  },
  {
    id: 'section5',
    title: 'section 5',
  },
  {
    id: 'section6',
    title: 'section 6',
  },
  {
    id: 'section7',
    title: 'section 7',
  },
  {
    id: 'section8',
    title: 'section 8',
  },
  {
    id: 'section9',
    title: 'section 9',
  },
  {
    id: 'section10',
    title: 'section 10',
  },
  {
    id: 'section11',
    title: 'section 11',
  },
  {
    id: 'footer',
    title: 'footer',
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function PinningPinSpacing() {
  const container = useRef(null);
  const headingRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const animation = gsap
        .timeline()
        .from(self.selector('.section2 h1'), {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.in',
        })
        .from(self.selector('.section2 p'), {
          opacity: 0,
          yPercent: 100,
          duration: 0.8,
          ease: 'power1.in',
        });
      ScrollTrigger.create({
        trigger: self.selector('.section2'),
        animation: animation,
        start: 'top 0',
        end: '+=2000',
        markers: true,
        pin: true,
        scrub: true,
        pinSpacing: true,
        // events: 'onEnter onLeave onEnterBack onLeaveBack'
        // toggleActions: 'restart complete reverse reset',
        // options : 'play, pause, resume, reset, restart, complete, reverse, none'
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className={styles.wrap} ref={container}>
        {sections.map(({ id, title }) => (
          <section key={title} className={`${styles.section} ${id}`}>
            <h1 ref={headingRef}>{title}</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              voluptas error, quidem quasi rerum sint iste illum quas harum,
              consequuntur non veniam. Aliquam explicabo debitis provident
              accusantium! Impedit deserunt esse dolorum, quia tempore debitis
              dolores quae officiis aut nam quasi, quidem sint eum soluta
              repudiandae error quas unde eaque, voluptatum iste nemo autem. Id
              voluptatem expedita aut repellendus magnam, accusantium velit
              neque ex aspernatur itaque natus tenetur perferendis esse
              reiciendis saepe praesentium similique illo iusto odio odit
              reprehenderit! Eius consectetur eveniet aperiam vitae qui facilis,
              magni eum quos optio quia aliquid itaque veniam, laborum, ea
              dolores deleniti fuga sapiente neque.
            </p>
          </section>
        ))}
      </div>
    </>
  );
}
