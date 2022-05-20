import { useState, useRef, useEffect } from 'react';

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener('mouseenter', () => setHovered(true));
    refCopy.current.addEventListener('mouseleave', () => setHovered(false));
    refCopy.current.removeEventListener('mouseenter', () => setHovered(true));
    refCopy.current.removeEventListener('mouseleave', () => setHovered(false));
  });
  return [ref, hovered];
}

export default useHover;

