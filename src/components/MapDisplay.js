import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";

const API_KEY = "AIzaSyDgz-Iu4suXDMHGDFYxN1OBFYhtDWxEUPQ"

export default function MapDisplay() {
  console.log("inside MapDisplay")

  const render = (status) => {
    console.log("inside render")
    if (status === Status.FAILURE) console.log("failure")
  };

  return <Wrapper apiKey={API_KEY} render={render}>
    <div style={{backgroundColor: "black"}}>
      <GoogleMap style={{height: "100vh", width: "100vw"}}/>
    </div>
  </Wrapper>

}
