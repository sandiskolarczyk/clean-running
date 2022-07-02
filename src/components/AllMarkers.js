import Marker from './Marker';

export default function AllMarkers({ clicks }) {
  return (
    <>
      {clicks.map((latLng, i) => (
        <Marker key={i} position={latLng} />
      ))}
    </>
  );
}
