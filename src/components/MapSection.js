import React, { useEffect, useRef } from 'react';

const MapSection = () => {
  const mapContainerRef = useRef(null);
  let map;

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapOptions = {
        center: { lat: 53.30486382654147, lng: -6.239360867266188 },
        zoom: 13
      };

      map = new google.maps.Map(mapContainerRef.current, mapOptions);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCFG_euU3kEwdZkbkvNg903lo`;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }

    return () => {
      if (map) {
        map = null;
      }
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
};

export default MapSection;
