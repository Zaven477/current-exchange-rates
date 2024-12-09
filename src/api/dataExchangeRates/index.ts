import { fetchJSON } from "../../fetch/fetchjson";

export const getExchangeRates = async () => {
  return await fetchJSON("https://www.cbr-xml-daily.ru/daily_json.js");
};
