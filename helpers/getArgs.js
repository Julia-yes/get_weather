export default function getArgs(args) {
  const result = {};
  const [executer, file, ...rest] = args;

  for (let i = 0; i < rest.length; i++) {
    if (rest[i].startsWith("-")) {
      if (rest[i + 1] && !rest[i + 1].startsWith("-")) {
        result[rest[i].slice(1, 2)] = rest[i + 1];
      } else {
        result[rest[i].slice(1, 2)] = true;
      }
    }
  }
  return result;
}
