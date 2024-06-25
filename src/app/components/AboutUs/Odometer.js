// components/Odometer.js
'use client'
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap/all';

const Odometer = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    const duration = 3; // Animation duration in seconds

    gsap.to(valueRef, {
      current: value,
      duration,
      roundProps: 'current',
      onUpdate: () => {
        setDisplayValue(valueRef.current);
      },
      ease: 'power1.inOut',
    });
  }, [value]);

  return <div ref={valueRef} className="odometer">{displayValue}</div>;
};

export default Odometer;

