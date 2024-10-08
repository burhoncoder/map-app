import { Storage } from "../../shared/storage";

import { IPoint, CoordinatesSchema } from "./model.ts";
import { DATABASE_NAME, STORE_NAME } from "./constants.ts";

const pointsStorage = new Storage<CoordinatesSchema>(DATABASE_NAME, STORE_NAME);

export const pointsApi = {
  getAllPoints: async () => {
    const database = await pointsStorage.dbWrapper;
    const persistedPoints = await database.getAll(STORE_NAME);
    if (persistedPoints.length > 0) {
      return persistedPoints;
    } else {
      const points = await import("../../shared/data/points.json");

      points.coordinates.forEach(point => {
        database.add("coordinates", point, point.id);
      });

      return points.coordinates;
    }
  },

  updatePoint: async (point: IPoint): Promise<void> => {
    const database = await pointsStorage.dbWrapper;
    await database.put(STORE_NAME, point, point.id);
  },
};
