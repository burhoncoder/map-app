import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CreateMapProps, useRenderMap } from "./model.ts";
import { IPoint } from "../../entities/point";
import { pointsApi } from "../../entities/point";

export const MapContainer = ({ onPointClick, renderUpdateModal }: CreateMapProps) => {
  const { mapRef, initMap } = useRenderMap(onPointClick);
  const [points, setPoints] = useState<IPoint[]>([]);

  const fetchPoints = () => {
    pointsApi
      .getAllPoints()
      .then(setPoints)
      .catch(() => toast.error("Could not load points"));
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  useEffect(() => {
    return initMap(points);
  }, [points]);

  return (
    <>
      <div ref={mapRef} className="absolute bottom-0 top-0 w-full"></div>
      {renderUpdateModal(fetchPoints)}
    </>
  );
};
