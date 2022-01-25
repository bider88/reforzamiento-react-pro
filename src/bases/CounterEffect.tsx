import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(4);
  const counterElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, MAX_COUNT));
  }
  useEffect(() => {
    if (counter < MAX_COUNT) return;
    console.log('%cSe llegó al valor máximo', 'color: green; background: white;');

    // One way
    // gsap.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'}).then(() => {
    //   gsap.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});
    // });

    const tl = gsap.timeline();
    // Second way
    // tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'});
    // tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});
    
    // Third way
    tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});
  }, [counter])
  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={ counterElement }>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
