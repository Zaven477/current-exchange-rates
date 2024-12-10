export type TCurrencyInfo = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export type ExchangeRatesState = {
  exchangeCurrency: TCurrencyInfo[];
  currentDate: string;
};
