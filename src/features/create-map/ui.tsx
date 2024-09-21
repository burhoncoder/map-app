import { useRenderMap } from "./model.ts";
import { useEffect, useState } from "react";

import { IPoint } from "../../entities/point";
import { pointsApi } from "../../entities/point";

export const MapContainer = () => {
  const { mapRef, initMap } = useRenderMap();
  const [points, setPoints] = useState<IPoint[]>([]);

  useEffect(() => {
    pointsApi.getAllPoints().then(setPoints);
  }, []);

  useEffect(() => {
    return initMap(points);
  }, [points]);

  return <div ref={mapRef} className="absolute bottom-0 top-0 w-full"></div>;
};
