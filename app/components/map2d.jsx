"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

export const Map2D = ({
  centerLocation = { lat: 51.105252150010614, lng: 71.43496565778284 },
}) => {
  return (
    <section id="map" className="flex w-full flex-col md:pt-16">
      <div className="h-[600px] w-full">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultZoom={2}
            defaultCenter={centerLocation}
            mapId={"11"}
            gestureHandling={"greedy"}
            colorScheme={"FOLLOW_SYSTEM"}
            // disableDefaultUI
          >
            <AdvancedMarker position={centerLocation} title={"Tompaq"}>
              <Pin background={"#eb831c"} />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};
