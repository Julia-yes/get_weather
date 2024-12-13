import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

export const saveParam = async (key, value) => {
  let data = {};
  const currentParamsData = await isExist(filePath);
  if (currentParamsData) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file.toString("utf-8"));
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export const getParam = async (key) => {
  const currentParamsData = await isExist(filePath);
  if (currentParamsData) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file.toString("utf-8"));
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};
