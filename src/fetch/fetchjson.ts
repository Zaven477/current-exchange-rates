export const fetchJSON = async (url: string, method?: { method: string }) => {
  const response = await fetch(url, method);
  return await response.json();
};
