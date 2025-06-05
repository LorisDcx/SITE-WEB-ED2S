import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Coordonnées précises ED2S (ZA de Longifan, 450 rue de Longifan, 38530 Chapareillan)
const position: [number, number] = [45.42982, 5.98369];

// Icône personnalisée orange
const ed2sIcon = new L.Icon({
  iconUrl: '/marker-ed2s.png', // à créer (optionnel), sinon icône leaflet par défaut
  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [0, -40],
  shadowUrl: undefined,
});

export default function MapED2S() {
  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false} style={{ height: '180px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={ed2sIcon}>
        <Popup>
          <b>ED2S</b><br />ZA de Longifan<br />38530 Chapareillan
        </Popup>
      </Marker>
    </MapContainer>
  );
}
