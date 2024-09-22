import React, { useRef } from "react";
import { Map, View } from "ol";
import { XYZ } from "ol/source";
import { Tile as TileLayer } from "ol/layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";

import type { IPoint } from "../../entities/point";

import GeolocationIconActivated from "../../shared/icons/geo-location-activated.svg";
import GeolocationIconDisabled from "../../shared/icons/geo-location-disabled.svg";

import "ol/ol.css";

export interface CreateMapProps {
  onPointClick: (point: IPoint) => void;
  renderUpdateModal: (fn: () => void) => React.ReactNode;
}

export const useRenderMap = (onPointClick: CreateMapProps["onPointClick"]) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = (points: IPoint[]) => {
    if (!mapRef.current) return;

    const mapObj = new Map({
      view: new View({
        center: fromLonLat([58.7532, 25.0793]),
        zoom: 8,
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
            crossOrigin: "anonymous",
          }),
        }),
      ],
      target: mapRef.current,
    });

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const newFeatures = points.map(marker => {
      const point = new Point(fromLonLat([marker.longitude, marker.latitude]));
      const feature = new Feature({
        geometry: point,
        name: marker.details,
        pointObject: marker,
      });

      const markerStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: marker.status ? GeolocationIconActivated : GeolocationIconDisabled,
        }),
      });

      feature.setStyle(markerStyle);
      return feature;
    });

    mapObj.on("click", evt => {
      const feature = mapObj.forEachFeatureAtPixel(evt.pixel, feature => {
        return feature;
      });

      if (feature) {
        const point = feature.get("pointObject") as IPoint;
        onPointClick(point);
      }
    });
    mapObj.addLayer(vectorLayer);

    vectorSource.addFeatures(newFeatures);

    mapObj.setTarget(mapRef.current);

    return () => mapObj.setTarget("");
  };

  return { mapRef, initMap };
};
