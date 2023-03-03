import React, { useRef } from 'react';
import styles from '../styles/creative-process.module.css';
import { useIsomorphicLayoutEffect } from '../utils/helpers';
import { gsap } from 'gsap';

export default function CreativeProcess() {
  const container = useRef(null);
  let timeline;

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline = gsap
        .timeline({ defaults: { opacity: 0, ease: 'back' } })
        .from(container.current, { ease: 'linear' })
        .from('h1', { x: 80 })
        .from('h2', { x: -80 })
        .from('p', { y: 30 })
        .from('button', { y: 30 })
        .from('#items > g', {
          scale: 0,
          transformOrigin: '50% 50%',
          stagger: 0.1,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div id={styles.demo} ref={container}>
        <div id={styles.main}>
          <h1>Creative</h1>
          <h2>Process</h2>
          <p>Learn how to find inspiration in the things you love. </p>
          <button className={styles.myButton}>READ MORE</button>
        </div>
        <div id={styles.images}>
          <svg
            x='0px'
            y='0px'
            width='238.54px'
            height='222.9px'
            viewBox='0 0 238.54 222.9'
          >
            <defs></defs>
            <g id='items'>
              <g id='earth'>
                <g>
                  <path
                    className='st11'
                    d='M32.46,133.87C14.21,122-2.78,106.82,0.38,101.97c3.16-4.85,23.92,4.52,42.17,16.39
				c18.25,11.87,35.24,27.05,32.08,31.9C71.47,155.11,50.71,145.73,32.46,133.87z M42.09,119.06C20.31,104.9,3.3,99.03,1.09,102.43
				c-2.21,3.4,10.05,16.56,31.83,30.73s38.78,20.04,41,16.64C76.13,146.39,63.87,133.23,42.09,119.06z'
                  />
                </g>

                <ellipse
                  transform='matrix(0.9791 -0.2033 0.2033 0.9791 -24.8604 10.2725)'
                  className='st17'
                  cx='37.58'
                  cy='126.16'
                  rx='22.47'
                  ry='22.47'
                />
                <path
                  className='st18'
                  d='M33.95,137.31c-0.55-1.19-1.51-2.14-2.56-2.91c-0.78-0.57-1.63-1.06-2.29-1.77
			c-0.66-0.7-1.13-1.69-0.91-2.63c0.34-1.5,2.26-2.49,2.06-4.02c-0.14-1.15-1.39-1.76-2.48-2.15c-2.65-0.95-5.38-1.79-7.74-3.32
			c-1.22-0.79-2.34-1.8-3.19-2.98c-3.89,9.33-1.05,20.3,7.17,26.52c1.55-0.61,3.33-0.53,5.02-0.64c1.89-0.13,3.98-0.68,4.92-2.33
			C34.57,139.95,34.49,138.5,33.95,137.31z'
                />
                <path
                  className='st18'
                  d='M53.77,110.58c-0.12,0.47-0.2,0.95-0.38,1.34c-0.51,1.14-1.36,2.14-2.47,2.75
			c-0.72,0.39-1.52,0.64-2.23,1.04c-0.71,0.41-1.37,1.03-1.52,1.84c-0.22,1.22,0.75,2.3,1.6,3.2c1.54,1.63,2.95,3.43,3.79,5.51
			c0.84,2.08,1.06,4.48,0.24,6.56c-0.56,1.43-1.57,2.65-2.15,4.08c-0.57,1.4-0.69,2.98-0.34,4.45c0.21,0.88,0.61,1.74,1.21,2.41
			c1.86-1.47,3.52-3.26,4.89-5.36C62.23,129.47,60.87,117.95,53.77,110.58z'
                />
                <path
                  className='st18'
                  d='M29.2,105.31c0.49,1.02,1.58,1.68,2.7,1.92c1.22,0.27,2.49,0.12,3.74,0.03c1.25-0.09,2.55-0.12,3.71,0.35
			c0.93,0.38,1.76,1.07,2.76,1.17c1.25,0.12,2.37-0.69,3.35-1.47c0.57-0.45,1.17-0.94,1.52-1.56
			C41.25,103.1,34.81,103.06,29.2,105.31z'
                />
                <path
                  className='st11'
                  d='M50.74,144.43c0.24-0.18,0.48-0.36,0.72-0.55c-5.53-2.77-11.8-6.35-18.54-10.73
			c-6.66-4.33-12.43-8.57-17.16-12.46c-0.08,0.29-0.15,0.59-0.21,0.88c5.06,4.13,10.91,8.39,16.91,12.29
			C38.52,137.81,44.86,141.47,50.74,144.43z'
                />
              </g>

              <g id='controller'>
                <linearGradient
                  id='SVGID_1_'
                  gradientUnits='userSpaceOnUse'
                  x1='8.6565'
                  y1='25.273'
                  x2='58.1769'
                  y2='44.8205'
                >
                  <stop offset='0' style={{ stopColor: '#F0FF5E' }} />
                  <stop offset='1' style={{ stopColor: '#D100A6' }} />
                </linearGradient>
                <path
                  className='st9'
                  d='M55.87,8.49c-7.31-1.22-14.77,0.12-21.55,2.79c-8.41,3.32-16.08,8.81-21.16,16.41S5.78,45.1,7.87,54.33
			c0.74,3.27,2.17,6.63,4.91,8.5c3.87,2.64,9.16,1.37,12.61-1.57c3.45-2.94,5.53-7.19,7.76-11.2c2.24-4,4.89-8.04,8.95-10.03
			c4.65-2.28,10.23-1.46,15.36-0.25c5.13,1.21,10.41,2.77,15.52,1.82c2.14-0.4,4.25-1.28,5.7-2.91c2.26-2.52,2.58-6.45,1.58-9.83
			c-1.57-5.33-6-10.3-10.13-13.83C66.06,11.56,61.02,9.35,55.87,8.49z'
                />
                <g>
                  <path
                    className='st10'
                    d='M58.96,16.13c0.77,1.59,0.1,3.51-1.49,4.27c-1.59,0.77-3.5,0.1-4.27-1.49c-0.77-1.59-0.1-3.51,1.49-4.27
				C56.28,13.87,58.19,14.54,58.96,16.13z'
                  />
                  <path
                    className='st10'
                    d='M64.14,26.83c0.77,1.59,0.1,3.5-1.49,4.27c-1.59,0.77-3.51,0.1-4.27-1.49c-0.77-1.59-0.1-3.51,1.49-4.27
				C61.46,24.58,63.37,25.24,64.14,26.83z'
                  />
                  <path
                    className='st10'
                    d='M51.92,22.58c1.59-0.77,3.51-0.1,4.27,1.49c0.77,1.59,0.1,3.51-1.49,4.27c-1.59,0.77-3.51,0.1-4.27-1.49
				C49.67,25.27,50.33,23.35,51.92,22.58z'
                  />
                  <path
                    className='st10'
                    d='M62.63,17.4c1.59-0.77,3.51-0.1,4.27,1.49c0.77,1.59,0.1,3.51-1.49,4.27c-1.59,0.77-3.51,0.1-4.27-1.49
				C60.37,20.09,61.04,18.17,62.63,17.4z'
                  />
                </g>
                <g>
                  <path
                    className='st10'
                    d='M20.79,34.6c0.77,1.59,0.1,3.5-1.49,4.27c-1.59,0.77-3.5,0.1-4.27-1.49c-0.77-1.59-0.1-3.51,1.49-4.27
				C18.1,32.34,20.02,33,20.79,34.6z'
                  />
                  <path
                    className='st10'
                    d='M25.96,45.3c0.77,1.59,0.1,3.51-1.49,4.27c-1.59,0.77-3.5,0.1-4.27-1.49c-0.77-1.59-0.1-3.51,1.49-4.27
				S25.19,43.71,25.96,45.3z'
                  />
                  <path
                    className='st10'
                    d='M13.75,41.05c1.59-0.77,3.51-0.1,4.27,1.49c0.77,1.59,0.1,3.51-1.49,4.27c-1.59,0.77-3.51,0.1-4.27-1.49
				C11.49,43.73,12.16,41.82,13.75,41.05z'
                  />
                  <path
                    className='st10'
                    d='M24.45,35.87c1.59-0.77,3.51-0.1,4.27,1.49c0.77,1.59,0.1,3.51-1.49,4.27s-3.5,0.1-4.27-1.49
				C22.19,38.56,22.86,36.64,24.45,35.87z'
                  />
                </g>
                <path
                  className='st11'
                  d='M41.01,27.05l-6.75,3.27c-0.89,0.43-1.26,1.49-0.83,2.38c0.43,0.89,1.49,1.26,2.38,0.83l6.75-3.27
			c0.89-0.43,1.26-1.49,0.83-2.38C42.97,26.99,41.9,26.62,41.01,27.05z'
                />
              </g>

              <g id='basketball'>
                <ellipse
                  transform='matrix(0.8291 -0.5591 0.5591 0.8291 -88.2072 87.516)'
                  className='st6'
                  cx='99.06'
                  cy='188.06'
                  rx='34.83'
                  ry='34.83'
                />

                <ellipse
                  transform='matrix(0.4312 -0.9022 0.9022 0.4312 -110.2839 195.987)'
                  className='st7'
                  cx='100.3'
                  cy='185.46'
                  rx='31.96'
                  ry='34.7'
                />
                <path
                  className='st8'
                  d='M87.02,155.38c-0.62,0.23-1.24,0.48-1.84,0.74c0.97,2.78,1.07,5.94,0.88,8.55
			c-0.98,13.64-8.76,26.63-20.04,34.37c0.22,0.65,0.45,1.29,0.7,1.93c11.99-8.04,20.29-21.75,21.32-36.15
			C88.25,161.96,88.13,158.49,87.02,155.38z'
                />
                <path
                  className='st8'
                  d='M113.14,219.91c-0.99-17.01,5.48-34.62,17.4-46.75c-0.3-0.63-0.62-1.25-0.95-1.86
			c-12.76,12.7-19.64,31.42-18.4,49.4C111.85,220.45,112.5,220.19,113.14,219.91z'
                />
                <path
                  className='st8'
                  d='M110.54,155.17c-7.19,22.07-17.2,43.01-29.87,62.46c0.56,0.35,1.13,0.69,1.72,1.01
			c12.72-19.54,22.78-40.58,30.01-62.75C111.79,155.63,111.17,155.39,110.54,155.17z'
                />
                <path
                  className='st8'
                  d='M69.32,169.93c-0.34,0.57-0.67,1.15-0.99,1.74c19.14,13.33,39.8,24.2,61.64,32.42
			c0.17-0.34,0.35-0.67,0.52-1.02c0.12-0.26,0.23-0.52,0.35-0.78C109.04,194.1,88.42,183.25,69.32,169.93z'
                />
              </g>

              <g id='book_1_'>
                <path
                  className='st7'
                  d='M111.3,108.67c0,0-15.09-10.85-31.23-13.28L93.15,62.3c0,0,21.96,6.66,27.73,15.23L111.3,108.67z'
                />
                <path
                  className='st7'
                  d='M111.3,108.67c0,0,18.58-0.49,33.29,6.57l7.79-34.72c0,0-21.91-6.84-31.5-2.99L111.3,108.67z'
                />
                <path
                  className='st12'
                  d='M120.88,77.53l-9.58,31.14c0,0-11.1-13.36-31.51-18.43l13-34.54C92.79,55.7,117.33,61.63,120.88,77.53z'
                />
                <path
                  className='st13'
                  d='M120.88,77.53l-9.58,31.14c0,0,16.69-4.81,36.42,2.47l8.68-35.87C156.39,75.27,132.76,66.38,120.88,77.53z'
                />
                <path
                  className='st11'
                  d='M122.45,72.43l-11.15,36.24c0,0-7.92-17.34-25.82-21.44l13.56-37.34C99.04,49.89,120.56,54.62,122.45,72.43z
			'
                />
                <path
                  className='st14'
                  d='M122.45,72.43l-11.15,36.24c0,0,16.3-9.89,33.41-3.22l9.79-38.5C154.49,66.95,134.02,58.77,122.45,72.43z'
                />
              </g>

              <g id='pencil'>
                <path
                  className='st15'
                  d='M193.88,1.48L193.88,1.48c-1.3-1.67-3.7-1.97-5.37-0.67l-67.46,52.47l-7.91,11l12.61-4.96l67.46-52.47
			C194.88,5.55,195.18,3.15,193.88,1.48L193.88,1.48z'
                />
                <path
                  className='st3'
                  d='M194.22,1.91c-1.48-1.91-4.04-2.4-5.7-1.1L121.1,53.33l-0.84,1.27l2.02,2.63l71.98-55.25
			C194.24,1.96,194.23,1.93,194.22,1.91z'
                />
                <path
                  className='st16'
                  d='M125.75,59.32c0.04-0.43,0.05-0.9-0.44-1.57c-0.46-0.61-1.62-0.53-2.12-1.24c-0.51-0.74-0.06-1.62-0.54-2.41
			c-0.32-0.53-0.88-0.92-1.5-0.91l-0.1,0.08l-7.91,11L125.75,59.32z'
                />
                <path
                  className='st10'
                  d='M115.05,61.62l-1.91,2.66l3.04-1.2c-0.01-0.33-0.11-0.65-0.32-0.92C115.65,61.89,115.37,61.71,115.05,61.62z
			'
                />
                <path
                  className='st17'
                  d='M193.88,1.48c-1.3-1.67-3.7-1.97-5.37-0.67l-6.19,4.82l4.7,6.04l6.19-4.82
			C194.88,5.55,195.18,3.15,193.88,1.48z'
                />

                <rect
                  x='185.63'
                  y='3.67'
                  transform='matrix(0.7894 -0.6139 0.6139 0.7894 34.6067 115.8565)'
                  className='st10'
                  width='1.03'
                  height='7.66'
                />

                <rect
                  x='184.15'
                  y='4.82'
                  transform='matrix(0.7894 -0.6139 0.6139 0.7894 33.588 115.1901)'
                  className='st10'
                  width='1.03'
                  height='7.66'
                />
              </g>

              <g id='ball'>
                <ellipse
                  transform='matrix(0.898 -0.4401 0.4401 0.898 -40.0675 94.0554)'
                  className='st19'
                  cx='182.8'
                  cy='133.43'
                  rx='15.25'
                  ry='15.25'
                />
                <path
                  className='st20'
                  d='M196.95,127.76c-0.61-1.51-1.43-2.89-2.43-4.09c-2.06,0.62-4.22,1-6.35,1.3c-4.17,0.57-8.42,0.85-12.46,2.03
			c-3.05,0.9-5.69,2.36-8.02,4.46c-0.2,1.53-0.18,3.11,0.11,4.69c1.83-1.18,3.92-1.99,6.04-2.53c3.41-0.86,6.94-1.08,10.43-1.5
			c3.49-0.43,7.02-1.08,10.13-2.74C195.29,128.9,196.13,128.35,196.95,127.76z'
                />
                <path
                  className='st20'
                  d='M196.65,139.78c0.74-1.62,1.2-3.36,1.34-5.17c-4.71,2.6-10.03,4.11-15.42,4.31c-2.8,0.1-5.64-0.13-8.36,0.54
			c-1.56,0.47-3.02,1.09-4.22,2.23c1.07,1.66,2.44,3.07,4.01,4.18c3.13,0.34,6.27,0.85,9.41,0.39c3.36-0.49,6.47-2.05,9.33-3.87
			C194.07,141.56,195.36,140.67,196.65,139.78z'
                />
                <path
                  className='st20'
                  d='M186.14,120.03c0.26,0.87-0.23,1.79-1.1,2.05c-0.87,0.26-1.79-0.23-2.05-1.1c-0.26-0.87,0.23-1.79,1.1-2.05
			C184.97,118.67,185.88,119.16,186.14,120.03z'
                />
                <path
                  className='st20'
                  d='M183.08,122.56c0.09,0.3-0.08,0.61-0.38,0.7c-0.3,0.09-0.61-0.08-0.7-0.38c-0.09-0.3,0.08-0.61,0.38-0.7
			C182.67,122.1,182.99,122.27,183.08,122.56z'
                />
                <path
                  className='st20'
                  d='M187.34,122.98c0.17,0.57-0.15,1.17-0.72,1.34c-0.57,0.17-1.17-0.15-1.34-0.72
			c-0.17-0.57,0.15-1.17,0.72-1.34C186.58,122.09,187.17,122.41,187.34,122.98z'
                />
              </g>

              <g id='paint'>
                <path
                  className='st0'
                  d='M238.35,102.05c1.06-8.16-2.29-16.48-7.73-22.65c-2.57-2.91-5.83-6.12-5.21-9.95
			c0.44-2.66,3.22-5.76,1.1-8.34c-1.62-1.98-5.75-2.66-8.1-3.15c-6.44-1.36-13.25-0.92-19.46,1.24c-3.55,1.23-6.9,3.03-9.85,5.36
			c-4.26,3.36-7.78,7.85-9.21,13.08c-2.09,7.64,0.53,15.92,4.92,22.51c6.48,9.73,16.92,16.74,28.37,19.07
			c3.29,0.67,6.7,0.96,9.98,0.29C231.23,117.84,237.28,110.2,238.35,102.05z M218.4,70.96c-1.79,0.38-3.74-0.08-5.19-1.22
			c-0.74-0.58-1.38-1.43-1.35-2.37c0.02-0.72,0.44-1.37,0.96-1.86c1.39-1.28,3.66-1.4,5.31-0.54c1.52,0.79,3.43,2.85,2.39,4.67
			C220.1,70.39,219.24,70.78,218.4,70.96z'
                />
                <path
                  className='st1'
                  d='M209.52,84.06c-0.8,2.35,0.43,4.85,1.25,7.2c0.34,0.98,0.62,2.01,1.16,2.89c0.54,0.89,1.43,1.65,2.46,1.73
			c1.29,0.11,2.45-0.84,3.21-1.89c0.76-1.06,1.29-2.28,2.2-3.21c0.51-0.52,1.14-0.94,1.55-1.55c0.85-1.26,0.53-3.01-0.25-4.31
			C218.99,81.38,211.3,78.83,209.52,84.06z'
                />
                <path
                  className='st2'
                  d='M194.05,69.13c-1.59,1.13-1.94,3.28-2.5,5.14c-0.23,0.78-0.52,1.56-0.58,2.37c-0.06,0.81,0.15,1.7,0.78,2.23
			c0.77,0.66,1.94,0.58,2.9,0.26c0.96-0.32,1.86-0.86,2.86-1.03c0.56-0.1,1.15-0.08,1.69-0.27c1.12-0.41,1.71-1.67,1.81-2.86
			C201.3,71.76,197.58,66.62,194.05,69.13z'
                />
                <path
                  className='st3'
                  d='M217.62,102.4c-1.41,1.56-2.92,3.35-2.83,5.45c0.05,1.29,0.72,2.49,1.57,3.47c1.49,1.73,3.91,2.95,6.06,2.18
			c1.65-0.59,2.75-2.26,3.05-3.99c0.3-1.73-0.09-3.51-0.69-5.15c-0.47-1.31-1.26-3.52-2.73-4.03
			C220.31,99.72,218.66,101.25,217.62,102.4z'
                />
                <path
                  className='st4'
                  d='M191.99,92.92c-0.36,1.39-0.02,2.86,0.42,4.22c0.35,1.09,0.78,2.18,1.48,3.08c0.7,0.9,1.72,1.61,2.86,1.72
			c1.33,0.13,2.64-0.59,3.48-1.64c0.84-1.04,1.25-2.36,1.46-3.69c0.24-1.55,0.2-3.19-0.46-4.61
			C199.43,88.09,193.1,88.71,191.99,92.92z'
                />
                <ellipse
                  className='st5'
                  cx='215.79'
                  cy='67.66'
                  rx='6.32'
                  ry='5.05'
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </main>
  );
}
