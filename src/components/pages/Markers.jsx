import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function Markers() {
  const [cities, setCities] = React.useState([]);
  const map = useMap();

  async function getCities() {
    const response = await fetch(
      "https://63849be33fa7acb14ffa868f.mockapi.io/api/Cities"
    );
    const data = await response.json();
    setCities(data);
  }

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div>
      {cities.map((e, i) => {
        return (
          <Marker
            position={e.cordinates}
            key={e.id}
            eventHandlers={{
              click: (e) => {
                map.setView(e?.cordinates, 14);
              },
            }}
          >
            <Popup>{e.city}</Popup>
          </Marker>
        );
      })}
    </div>
  );
}

export default Markers;
