import {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker ,Popup, useMap} from 'react-leaflet'
import '../styles/react-leaflet.css'

const MapView = ({lat, lon}) => {
    /* let position = [9.099726451923722, -67.1502652169602] */
  const [position, setPosition] = useState([lat,lon])

  useEffect(() =>{
    setPosition([lat,lon])
  },[lat,lon])

  const Hook = () => {
    const View = useMap()
    View.setView(position)
    return null
  }
  return(
    <MapContainer center={position} zoom={8} scrollWheelZoom={true}>
      <Hook/>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Hola <br /> Estoy Aqui!
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default MapView