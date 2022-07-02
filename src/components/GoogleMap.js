import { useRef, useState, useEffect } from 'react';

export default function GoogleMap() {

  const zoom = 14
  const center = { lat: -0.131, lng: 51.501 }

  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return <div ref={ref} />
}
