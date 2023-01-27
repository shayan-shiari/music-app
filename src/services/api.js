import axios from "axios";
const baseUrl = "https://api-beta.melobit.com";

const fetchApi = async (url) => {
  let result;
  await axios
    .get(`${baseUrl}/${url}`)
    .then((response) => (result = response.data));
  return result;
};

export { fetchApi };
