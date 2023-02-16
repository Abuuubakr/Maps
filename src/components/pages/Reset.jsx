import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

function Reset(props) {
  
    const {  position } = props
    const map = useMap();
    console.log(position.cordinates[0])

    useEffect(() => {
        if(position){
            map.flyTo(position.cordinates, 14)
        }
    }, [position])
  
    return null
}   

export default Reset