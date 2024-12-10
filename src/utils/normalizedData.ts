import { TCurrencyInfo } from "../store/types";

export const normalizedData = (data: Record<string, TCurrencyInfo>) => {
  return Object.values(data);
};
