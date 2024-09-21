import { DBSchema } from "idb";

export interface IPoint {
  id: number;
  latitude: number;
  longitude: number;
  status: boolean;
  details: string;
}

export interface CoordinatesSchema extends DBSchema {
  coordinates: {
    key: number;
    value: IPoint;
  };
}
