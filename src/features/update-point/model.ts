import { pointsApi } from "../../entities/point";
import { IPoint } from "../../entities/point";

export interface IUpdatePoint {
  details: string;
  status: boolean;
}

export interface UpdatePointProps {
  point: IPoint | null;
  onUpdatedPoint: () => void;
  onClose: () => void;
}

export const useModifyPoint = () => {
  const mapValueToForm = (point: IPoint) => ({
    details: point.details,
    status: point.status,
  });

  const updatePoint = (form: IUpdatePoint, point: IPoint) => {
    const payload: IPoint = { ...point, ...form };
    return pointsApi.updatePoint(payload);
  };

  return { mapValueToForm, updatePoint };
};
