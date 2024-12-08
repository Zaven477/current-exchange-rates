const fetchJSON = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export const getExchangeRates = async () => {
  return await fetchJSON("https://www.cbr-xml-daily.ru/daily_json.js");
};
