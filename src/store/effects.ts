import { getExchangeRates } from "../api/dataExchangeRates";
import { normalizedData } from "../utils/normalizedData";
import { AppDispatch } from "./configureStore";
import {
  setCurrentDate,
  setError,
  setExchangeCurrency,
  setLoading,
} from "./exchangeRatesSlice";

export const fetchDataExchangeRates = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));

      const { Valute, Date } = await getExchangeRates();
      const normalizedValute = normalizedData(Valute);

      dispatch(setExchangeCurrency(normalizedValute));
      dispatch(setCurrentDate(Date));

      dispatch(setLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message));
      }
    }
  };
};
