import { useState, useEffect } from 'react';

export default function Marker(options, { position }) {
  const [marker, setMarker] = useState();

  console.log("inside Marker")

  useEffect(() => {
    if (!marker) {
      setMarker(
        new window.google.maps.Marker({
          position: position,
          // map,
        })
      );
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker, position]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
}
