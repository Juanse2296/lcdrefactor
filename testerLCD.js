import readline from 'readline';
import ImpresorLCD from './impresorLCD';

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineInterface.question("Espacio entre Digitos (0 a 5): ", answer => {
   console.log(answer);   
   readLineInterface.close();
});