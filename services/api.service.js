import axios from "axios";
import { getParam } from "../helpers/workWithParams.js";
import { FLAGS_DICTIONARY } from "../constants.js";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  const token = await getParam(FLAGS_DICTIONARY.token);
  if (!token) {
    throw new Error("Не задан ключ API, задайте его через команду -t [API_KEY]");
  }
  const data = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: token,
      units: "metric",
      lang: "ru",
    },
  });
  return data.data;
};
