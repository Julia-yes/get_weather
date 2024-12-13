#!/usr/bin/env node

import getArgs from "./helpers/getArgs.js";
import { printHelp, printError, printSuccess } from "./services/log.services.js";
import { saveParam, getParam } from "./helpers/workWithParams.js";
import { FLAGS_DICTIONARY } from "./constants.js";
import { getWeather } from "./services/api.service.js";
import showForecast from "./helpers/showForecast.js";

const saveCity = async (city) => {
  if (!city.length) {
    printError("Не передан город");
    return;
  }
  try {
    await saveParam(FLAGS_DICTIONARY.city, city);
    printSuccess("Город сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токен");
    return;
  }
  try {
    await saveParam(FLAGS_DICTIONARY.token, token);
    printSuccess("Токен сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  const city = process.env.CITY ?? (await getParam(FLAGS_DICTIONARY.city));
  if (!city) {
    throw new Error("Не задан город, задайте его через команду -c [CITY]");
  }
  try {
    const data = await getWeather(city);
    showForecast(data);
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status == 401) {
      printError("Неверно указан токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.c) {
    await saveCity(args.c);
  }

  if (args.t) {
    await saveToken(args.t);
  }

  if (args.h) {
    printHelp();
    return;
  }
  getForecast();
};

initCLI();
