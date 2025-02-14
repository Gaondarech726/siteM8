import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

import styled from 'styled-components';

export const H1 = styled.h1`
  color: white;
  padding-bottom: 50px;
  padding-top: 50px;
`;

import E6 from '../../img/fests/ASGARDSREI 2017.jpg';
import E4 from '../../img/fests/ASGARDSREI 2019.png';
import E12 from '../../img/fests/ASGARDSREI III FEST.jpg';
import E5 from '../../img/fests/ASGARDSREI IV.png';
import E9 from '../../img/fests/ASGARDSREI V.jpg';
import E7 from '../../img/fests/ASGARDSREI VII FEST.png';
import E11 from '../../img/fests/HEIL RAGNAROK FEST.jpg';
import E2 from '../../img/fests/HERETIC FEST II.jpg';
import E3 from '../../img/fests/HERETIC FEST.jpg';
import E10 from '../../img/fests/KABARET PESTE NOIRE.png';
import E8 from '../../img/fests/VSESLAV THE SORCERER.jpg';
import E1 from '../../img/fests/YULE NIGHT.jpg';

const tourLocations = [
  {
    name: 'YULE NIGHT',
    date: '26.12.2024',
    lat: 50.4101,
    lon: 30.5234,
    torf: 'Невідомо',
    img: E1,
  },
  {
    name: 'HERETIC FEST II',
    date: '18.12.2021',
    lat: 50.4301,
    lon: 30.5234,
    torf: 'Невідомо',
    img: E2,
  },
  {
    name: 'HERETIC FEST',
    date: '?.12.2021',
    lat: 50.3301,
    lon: 30.5234,
    torf: 'Невідомо',
    img: E3,
  },
  {
    name: 'ASGARDSREI 2019',
    date: '14-15.12.2019',
    lat: 50.45765988462116,
    lon: 30.381066715122937,
    torf: 'Відомо',
    img: E4,
  },
  {
    name: 'ASGARDSREI IV FEST',
    date: '13.12.2015',
    lat: 50.439140872304726,
    lon: 30.52074712943192,
    torf: 'Відомо',
    img: E5,
  },
  {
    name: 'ASGARDSREI 2017',
    date: '16.12.2017',
    lat: 50.453140872304726,
    lon: 30.52074712943192,
    torf: 'Невідомо',
    img: E6,
  },
  {
    name: 'ASGARDSREI VII FEST',
    date: '14-16.12.2018',
    lat: 50.453140872304726,
    lon: 30.52074712943192,
    torf: 'Невідомо',
    img: E7,
  },
  {
    name: 'VSESLAV THE SORCERER',
    date: '18.10.2015',
    lat: 50.45765988462116,
    lon: 30.381466715122937,
    torf: 'Відомо',
    img: E8,
  },
  {
    name: 'ASGARDSREI V',
    date: '18.12.2016',
    lat: 50.45765988462116,
    lon: 30.481466715122937,
    torf: 'Невідомо',
    img: E9,
  },
  {
    name: 'KABARET PESTE NOIRE',
    date: '18.12.2016',
    lat: 50.45112202197303,
    lon: 30.519910988852622,
    torf: 'Відомо',
    img: E10,
  },
  {
    name: 'HEIL RAGNAROK FEST',
    date: '14.04.2012',
    lat: 55.76424314588695,
    lon: 37.55013305499709,
    torf: 'Відомо',
    img: E11,
  },
  {
    name: 'ASGARDSREI III FEST',
    date: '15.12.2012',
    lat: 55.66428314588695,
    lon: 37.65013305499709,
    torf: 'Невідомо',
    img: E12,
  },
];

export function TourMap() {
  return (
    <>
      <H1>Місця проведення концертів M8L8TH</H1>
      <MapContainer
        center={[53.4501, 32.5234]}
        zoom={6}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tourLocations.map((event, index) => (
          <Marker
            key={index}
            position={[event.lat, event.lon]}
            icon={customIcon}
          >
            <Popup>
              <b>{event.name}</b> <br />
              Дата: {event.date}
              <br />
              Точне місце проведення: {event.torf}
              <img src={event.img} alt="" />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
