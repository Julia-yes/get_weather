import chalk from "chalk";
import dedent from "dedent";

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

export default function showForecast(data) {
  const icon = getIcon(data.weather[0].icon)
  console.log(dedent`${chalk.bgYellow("Wether")}
    погода в городе ${chalk.bgMagenta(data.name)}
    ${icon}  ${data.weather[0].description}
    Температура: ${data.main.temp} (ощущается как ${data.main.feels_like})
    Влажность: ${data.main.humidity}%`);
}
