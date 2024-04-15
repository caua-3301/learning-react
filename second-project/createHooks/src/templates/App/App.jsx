import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import P from 'prop-types';

const useMediaQuery = (quaryValue) => {
  const [match, setMatch] = useState(0);

  useEffect(() => {
    let isMoutend = true;

    const matchMedia = window.matchMedia(quaryValue);

    const handleChange = () => {
      if (isMoutend) return;

      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(matchMedia.matches);

    return () => {
      isMoutend = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [quaryValue]);
};

export default function App() {
  const test = useMediaQuery('(max-width: 763px)');
  return <div style={{ backgroundColor: `${test ? 'black' : 'red'}` }}>Oi</div>;
}
