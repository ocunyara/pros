import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import iconMaker from '@/assets/marker.png'
const center = {
  lat: 49.4117548,
  lng: 27.0130929,
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const GoogleMapSection = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAP_API,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback((map) => {
    console.log('Map loaded:', map);
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    console.log('Map unmounted');
    setMap(null);
  }, []);

  if (loadError) {
    console.error('Google Maps API failed to load:', loadError);
    return <div>Error loading Google Maps</div>;
  }

  return isLoaded ? (
    <div className='w-full h-[540px]'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >  <Marker position={center} icon={iconMaker} /></GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMapSection;
