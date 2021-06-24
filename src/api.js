const API_URL = "https://restcountries.eu/rest/v2";

async function callApi(endpoints) {
  const response = await fetch(`${API_URL}${endpoints}`);
  const data = await response.json();
  return data;
}

const api = {
  countries: {
    list() {
      return callApi("/all");
    },
    read(countryName) {
      return callApi(`/name/${countryName}?fullText=true`);
    },
    readAlpha(alphaCode) {
      return callApi(`/alpha/${alphaCode}`);
    },
    listRegion(region) {
      return callApi(`/region/${region}`);
    },
  },
};

export default api;
