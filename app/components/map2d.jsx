import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

import { countriesCoordinates } from "../data/countries";

export const Map2D = ({ country }) => {
  return (
    <section id="map" className="flex w-full flex-col md:pt-16">
      <div className="h-[600px] w-full">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <Map
            defaultZoom={4}
            defaultCenter={countriesCoordinates[country]}
            mapId={"11"}
            gestureHandling={"greedy"}
            colorScheme={"FOLLOW_SYSTEM"}
            disableDefaultUI
            mapTypeId={"satellite"}
          >
            <AdvancedMarker
              position={countriesCoordinates[country]}
              title={"Tompaq"}
            >
              {/* i can put my own color in the background attribute */}
              <Pin background={""} />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};
