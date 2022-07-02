import { useRef, useState, useEffect } from 'react';

export default function GoogleMap({ center, zoom, position, onClick }) {
  const ref = useRef(null);
  const [map, setMap] = useState();
  console.log('mapp', map);

  useEffect(() => {
    if (map) {
      ['click'].forEach(eventName =>
        window.google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener('click', onClick);
      }
    }
  }, [map, onClick]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  const marker = new window.google.maps.Marker({
    position: position,
    map,
  });

  return <div ref={ref} id="map" style={{ height: '50vh', width: '50vh' }} />;
}
