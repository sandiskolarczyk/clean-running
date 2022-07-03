import { useRef, useState, useEffect } from 'react';

export default function GoogleMap({
  center,
  zoom,
  position,
  onClick,
  allMarkers,
}) {
  const ref = useRef(null);
  const [map, setMap] = useState();
  // console.log('map', map);

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

  // add marker to map on click
  if (allMarkers.length < 6) {
    new window.google.maps.Marker({
      position: position,
      map,
    });
  } else {
    window.alert(`sorry, you can't add more than 6 markers!`)
  }

  return <div ref={ref} id="map" style={{ height: '60vh', width: '100%' }} />;
}
