import chalk from "chalk";

export default function showForecast(data) {
  console.log(`${chalk.bgMagenta(data.name)}
    ${data.weather[0].description}
    Температура: ${data.main.temp}`);
}
