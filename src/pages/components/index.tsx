"use client";

import { useEffect, useRef } from "react";

export default function LiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Global callback function called by Google Maps
      window.initMap = () => {
        if (!mapRef.current) return;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.006 }, // New York City
          zoom: 13,
          disableDefaultUI: true,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
          ],
        });

        new google.maps.Marker({
          position: { lat: 40.7128, lng: -74.006 },
          map: map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeWeight: 0,
          },
        });
      };
    };

    loadGoogleMapsScript();

    return () => {
      window.initMap = undefined;
      const script = document.querySelector(
        'script[src*="maps.googleapis.com/maps/api"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}

// Add TypeScript declarations for globals
declare global {
  interface Window {
    initMap?: () => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let google: any;
}
