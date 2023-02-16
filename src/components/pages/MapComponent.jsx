// import { SearchControl } from "leaflet-geosearch";
import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
// import Search from "react-leaflet-search";



import "./Map.css";
import Markers from "./Markers";
import Reset from "./Reset";
// import Search2 from "./Search2";

// Location.Icon.Default.imagePath =
//   "https://unpkg.com/leaflet@1.5.0/dist/images/";


function MapComponent(props) {
  
  const center = [38.950807, 71.015001];
  const zoom = 7
  const { position } = props;


  // console.log(zoom);

  return (
    <MapContainer zoom={zoom} center={center}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers/>
      { position &&
          <Reset position={position}/>
      }  
    </MapContainer>
  );
}

export default MapComponent;
