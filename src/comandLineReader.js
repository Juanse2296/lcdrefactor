import readline from "readline";
import { message } from "./middlewares/consoleMessage";

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const askForInformation = question => {
  console.log(message(question));
  return new Promise(resolve => {
    readLineInterface.on("line", answer => resolve(answer));
  });
};
