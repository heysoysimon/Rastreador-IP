import React from 'react'
import { MapContainer, TileLayer, Marker ,Popup} from 'react-leaflet'
import '../styles/react-leaflet.css'
import { MarkerIcon } from '../react-leaflet-icon'

const MapView = () => {
    const position = [9.099726451923722, -67.1502652169602]

  return(
    <MapContainer center={[9.099726451923722, -67.1502652169602]} zoom={6} scrollWheelZoom={true}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[10.500094737208338, -67.00710998051179]}>
      <Popup>
        Hola <br /> Estas Aqui!
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default MapView