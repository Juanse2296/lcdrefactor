import chalk from "chalk";

class ImpresorLCD {
  constructor() {
    this.CARACTER_VERTICAL = "|";
    this.CARACTER_HORIZONTAL = "-";
    this.POSICION_X = "X";
    this.POSICION_Y = "Y";
    // TODO code application logic here
    // String entrada = JOptionPane.showInputDialog("Digite el numero");
    this.size;
    // Calcula el numero de filasDig
    this.filasDig;
    this.columDig;
    this.totalFilas;
    this.totalColum;
    // Inicializa variables
    this.pf1 = new int[2]();
    this.pf2 = new int[2]();
    this.pf3 = new int[2]();
    this.pf4 = new int[2]();
    this.pf5 = new int[2]();
    this.matrizImpr;
  }

  /**
   *
   * Metodo encargado de aÃ±adir una linea a la matriz de Impresion
   *
   * @param matriz
   *            Matriz Impresion
   * @param punto
   *            Punto Pivote
   * @param posFija
   *            Posicion Fija
   * @param size
   *            TamaÃ±o Segmento
   * @param caracter
   *            Caracter Segmento
   */
  adicionarLinea(matriz, punto, posFija, size, caracter) {
    if (posFija.equalsIgnoreCase(POSICION_X)) {
      for (let y = 1; y <= size; y++) {
        let valor = punto[1] + y;
        matriz[punto[0]][valor] = caracter;
      }
    } else {
      for (let i = 1; i <= size; i++) {
        let valor = punto[0] + i;
        matriz[valor][punto[1]] = caracter;
      }
    }
  }

  /**
   *
   * Metodo encargado de un segmento a la matriz de Impresion
   *
   * @param segmento
   *            Segmento a adicionar
   */
  adicionarSegmento(segmento) {
    switch (segmento) {
      case 1:
        adicionarLinea(
          this.matrizImpr,
          this.pf1,
          POSICION_Y,
          this.size,
          CARACTER_VERTICAL
        );
        break;
      case 2:
        adicionarLinea(
          this.matrizImpr,
          this.pf2,
          POSICION_Y,
          this.size,
          CARACTER_VERTICAL
        );
        break;
      case 3:
        adicionarLinea(
          this.matrizImpr,
          this.pf5,
          POSICION_Y,
          this.size,
          CARACTER_VERTICAL
        );
        break;
      case 4:
        adicionarLinea(
          this.matrizImpr,
          this.pf4,
          POSICION_Y,
          this.size,
          CARACTER_VERTICAL
        );
        break;
      case 5:
        adicionarLinea(
          this.matrizImpr,
          this.pf1,
          POSICION_X,
          this.size,
          CARACTER_HORIZONTAL
        );
        break;
      case 6:
        adicionarLinea(
          this.matrizImpr,
          this.pf2,
          POSICION_X,
          this.size,
          CARACTER_HORIZONTAL
        );
        break;
      case 7:
        adicionarLinea(
          this.matrizImpr,
          this.pf3,
          POSICION_X,
          this.size,
          CARACTER_HORIZONTAL
        );
        break;
      default:
        break;
    }
  }

  /**
   *
   * Metodo encargado de definir los segmentos que componen un digito y a partir
   * de los segmentos adicionar la representacion del digito a la matriz
   *
   * @param numero
   *            Digito
   */
  adicionarDigito(numero) {
    // Establece los segmentos de cada numero
    let segList = [];

    switch (numero) {
      case 1:
        segList.push(3);
        segList.push(4);
        break;
      case 2:
        segList.push(5);
        segList.push(3);
        segList.push(6);
        segList.push(2);
        segList.push(7);
        break;
      case 3:
        segList.push(5);
        segList.push(3);
        segList.push(6);
        segList.push(4);
        segList.push(7);
        break;
      case 4:
        segList.push(1);
        segList.push(6);
        segList.push(3);
        segList.push(4);
        break;
      case 5:
        segList.push(5);
        segList.push(1);
        segList.push(6);
        segList.push(4);
        segList.push(7);
        break;
      case 6:
        segList.push(5);
        segList.push(1);
        segList.push(6);
        segList.push(2);
        segList.push(7);
        segList.push(4);
        break;
      case 7:
        segList.push(5);
        segList.push(3);
        segList.push(4);
        break;
      case 8:
        segList.push(1);
        segList.push(2);
        segList.push(3);
        segList.push(4);
        segList.push(5);
        segList.push(6);
        segList.push(7);
        break;
      case 9:
        segList.push(1);
        segList.push(3);
        segList.push(4);
        segList.push(5);
        segList.push(6);
        segList.push(7);
        break;
      case 0:
        segList.push(1);
        segList.push(2);
        segList.push(3);
        segList.push(4);
        segList.push(5);
        segList.push(7);
        break;
      default:
        break;
    }

    for (let iterator of segList) {
      adicionarSegmento(iterator.next());
    }
  }

  /**
   *
   * Metodo encargado de imprimir un numero
   *
   * @param size
   *            TamaÃ±o Segmento Digitos
   * @param numeroImp
   *            Numero a Imprimir
   * @param espacio
   *            Espacio Entre digitos
   */
}

export const printNumber = (digitSize, numberToPrint, espacio) => {
  let pivotX = 0;
  digitos = [];

  this.size = digitSize;

  // Calcula el numero de filas cada digito
  this.filasDig = 2 * this.size + 3;

  // Calcula el numero de columna de cada digito
  this.columDig = this.size + 2;

  // Calcula el total de filas de la matriz en la que se almacenaran los digitos
  this.totalFilas = this.filasDig;

  // Calcula el total de columnas de la matriz en la que se almacenaran los
  // digitos
  this.totalColum =
    this.columDig * numberToPrint.length() + espacio * numberToPrint.length();

  // crea matriz para almacenar los numero a imprimir
  this.matrizImpr = new String[this.totalFilas][this.totalColum]();

  // crea el arreglo de digitos
  digitos = numberToPrint.toCharArray();

  // Inicializa matriz
  for (let i = 0; i < this.totalFilas; i++) {
    for (let j = 0; j < this.totalColum; j++) {
      this.matrizImpr[i][j] = " ";
    }
  }

  for (let digito of digitos) {
    // Valida que el caracter sea un digito
    if (!Character.isDigit(digito)) {
      throw new Error("Caracter " + digito + " no es un digito");
    }

    let numero = Integer.parseInt(String.valueOf(digito));

    // Calcula puntos fijos
    this.pf1[0] = 0;
    this.pf1[1] = 0 + pivotX;

    this.pf2[0] = this.filasDig / 2;
    this.pf2[1] = 0 + pivotX;

    this.pf3[0] = this.filasDig - 1;
    this.pf3[1] = 0 + pivotX;

    this.pf4[0] = this.columDig - 1;
    this.pf4[1] = this.filasDig / 2 + pivotX;

    this.pf5[0] = 0;
    this.pf5[1] = this.columDig - 1 + pivotX;

    pivotX = pivotX + this.columDig + espacio;

    adicionarDigito(numero);
  }

  // Imprime matriz
  for (let i = 0; i < this.totalFilas; i++) {
    for (let j = 0; j < this.totalColum; j++) {
      System.out.print(this.matrizImpr[i][j]);
    }
    System.out.println();
  }
};
