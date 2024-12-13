import chalk from "chalk";
import dedent from "dedent";

export const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + " " + message);
};

export const printError = (error) => {
  console.log(chalk.bgRed("Error") + " " + error);
};

export const printHelp = () => {
  console.log(dedent`${chalk.bgCyan(" HELP ")}
  Без параметров - вывод погоды
  -c [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена
  `);
};
