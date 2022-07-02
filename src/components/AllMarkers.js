import Marker from './Marker';

export default function AllMarkers({ clicks }) {
  console.log("inside AllMarkers")
  return (
    <>
      {clicks.map((latLng, i) => (
        <Marker key={i} position={latLng} />
      ))}
    </>
  );
}
