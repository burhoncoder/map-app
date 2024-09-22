import { useState } from "react";

import { MapContainer } from "../features/create-map";
import { UpdatePoint } from "../features/update-point";
import { IPoint } from "../entities/point";

export const MapWidget = () => {
  const [selectedPoint, setSelectedPoint] = useState<IPoint | null>(null);

  const handleSelectPoint = (point: IPoint) => {
    setSelectedPoint(point);
  };

  const clearSelectedPoint = () => {
    setSelectedPoint(null);
  };

  return (
    <>
      <MapContainer
        onPointClick={handleSelectPoint}
        renderUpdateModal={refetchPoints => (
          <UpdatePoint point={selectedPoint} onClose={clearSelectedPoint} onUpdatedPoint={refetchPoints} />
        )}
      />
    </>
  );
};
