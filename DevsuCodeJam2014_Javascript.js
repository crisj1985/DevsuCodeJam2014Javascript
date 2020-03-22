	function compress(cadena) {
	    //cadena = "aaaabbdxy";
	    nuevo = [];
	    respuesta = "";
	    resp = "";
	    for (i = 0; i < cadena.length; i++)
	        nuevo.push(cadena[i]);

	    conjunto = new Set(nuevo);

	    primero = [];
	    conjunto.forEach((m) => {
	        window['Tipo' + '_' + m] = nuevo.filter(x => x.startsWith(m));
	        primero.push(this["Tipo_" + m]);
	    })

	    primero.forEach(x => {
	        resp = x[0] + (x.length > 1 ? x.length : "");
	        respuesta += resp;
	    })
	    console.log(respuesta);
	    alert(respuesta);
	}

	function encode(cadena) {

	    console.log(cadena[0]);
	    conjunto = new Map();
	    contador = 0

	    for (i = 0; i < cadena.length; i++)
	        contador += (cadena.charAt(i) == " " ? 1 : 0);

	    siguiente = cadena.slice(0, cadena.indexOf(" "));
	    conjunto.set(0, siguiente);
	    otro = cadena.slice(cadena.indexOf(" ") + 1);
	    conjunto1 = [];

	    for (i = 1; i <= contador; i++) {

	        if (i == contador)
	            siguiente = otro.slice(0);
	        else
	            siguiente = otro.slice(0, otro.indexOf(" "));
	        conjunto.set(i, siguiente);
	        otro = otro.slice(otro.indexOf(" ") + 1);

	    }

	    conjunto.forEach(x => {
	        palabraReverse = "";
	        for (i = x.length - 1; i > -1; i--)
	            palabraReverse += x[i];
	        conjunto1.push(palabraReverse);
	    })

	    conjunto1 = conjunto1.map(x => x.toLowerCase());
	    conjunto1 = conjunto1.map(x => x.charAt(0).toUpperCase() + x.slice(1));
	    for (i = conjunto1.length - 1; i > -1; i--)
	        console.log(conjunto1[i]);
	    //alert(conjunto1);



	}

	function findSum(cadena) {
	    //48-57
	    //"la suma de 1 + 98 es 99"
	    resultado = 0;
	    numero = "";
	    numerosCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

	    for (i = 0; i < cadena.length; i++) {

	        if (cadena.charCodeAt(i) > 47 && cadena.charCodeAt(i) < 58) {
	            if ((cadena.charCodeAt(i - 1) <= 47 || cadena.charCodeAt(i - 1) >= 58) && (cadena.charCodeAt(i + 1) <= 47 || cadena.charCodeAt(i + 1) >= 58)) {
	                numero = cadena[i]
	                resultado += parseInt(numero);
	                numero = "";
	            } else if (cadena.charCodeAt(i + 1) > 47 && cadena.charCodeAt(i + 1) < 58) {
	                numero += cadena[i]; //+ cadena[i+1]		
	            } else if (cadena[i + 1] == undefined || (cadena.charCodeAt(i + 1) <= 47 || cadena.charCodeAt(i + 1) >= 58)) {
	                numero += cadena[i]; //+ cadena[i+1]	
	                resultado += parseInt(numero);
	                numero = "";
	            }

	        }

	        console.log(resultado);

	    }

	}

	function cipher(cadena) {
	    //impar next
	    //par previo
	    resultado = "";
	    abc = "abcdefghijklmnopqrstuvwxyz"
	    ABC = abc.toUpperCase();
	    letra = "";

	    for (i = 1; i <= cadena.length; i++) {
	        //validar que 
	        if (i % 2 == 0) {
	            if (abc.indexOf(cadena[i - 1]) != -1)
	                letra = abc[abc.indexOf(cadena[i - 1]) - 1];
	            //console.log(abc[abc.indexOf( cadena[i-1] ) - 1]);
	            else if (ABC.indexOf(cadena[i - 1]) != -1)
	                letra = ABC[ABC.indexOf(cadena[i - 1]) - 1];
	            //console.log(ABC[ABC.indexOf( cadena[i-1] ) - 1]);
	            else
	                letra = cadena[i - 1];
	            //console.log(cadena[i-1]);
	        } else {
	            if (abc.indexOf(cadena[i - 1]) != -1)
	                letra = abc[abc.indexOf(cadena[i - 1]) + 1];
	            //console.log(abc[abc.indexOf( cadena[i-1] ) + 1]);
	            else if (ABC.indexOf(cadena[i - 1]) != -1)
	                letra = ABC[ABC.indexOf(cadena[i - 1]) + 1];
	            //console.log(ABC[ABC.indexOf( cadena[i-1] ) + 1]);
	            else
	                letra = cadena[i - 1];
	            //console.log(cadena[i-1]);
	        }

	        if (letra == undefined) {
	            if (cadena[i - 1] == "a")
	                letra = "z";
	            else if (cadena[i - 1] == "A")
	                letra = "Z";

	            if (cadena[i - 1] == "z")
	                letra = "a";
	            else if (cadena[i - 1] == "Z")
	                letra = "A";
	        }

	        resultado += letra;
	    }

	    alert(resultado);


	}

	function simpleSerie(x) {
	    //2 5 10 17 26		
	    resultado = 0;
	    resultado = Math.pow(x, 2) + 1;
	    alert(resultado);

	}

	function magicSquare(matriz) {
	    result = false;
	    /*matriz = [[2,7,6], 	00 01 02 
	    		   [9,5,1], 	10 11 12
	    		   [4,3,8]];    20 21 22	*/
	    resultado0 = 0;
	    resultado1 = 0;
	    resultado2 = 0;
	    resultado3 = 0;
	    resultadoDiagonal = 0;
	    i = 0;

	    matriz.forEach(x => {
	            x.forEach(y => window['resultado' + i] += y)
	            i++;
	        }

	    );

	    if ((resultado0 == resultado1) && (resultado1 == resultado2)) {
	        resultado3 = resultado2;
	        resultado0 = resultado1 = resultado2 = 0;
	        for (var i = 0; i < matriz.length; i++) {
	            for (var j = 0; j < matriz[0].length; j++) {
	                switch (j) {
	                    case 0:
	                        window['resultado' + j] += matriz[i][j];
	                        break;
	                    case 1:
	                        window['resultado' + j] += matriz[i][j];
	                        break;
	                    case 2:
	                        window['resultado' + j] += matriz[i][j];
	                        break;
	                }

	            }
	        }
	        if (resultado0 == resultado3) {
	            if ((resultado0 == resultado1) && (resultado1 == resultado2)) {
	                for (var i = 0; i < matriz.length; i++) {
	                    for (var j = 0; j < matriz[0].length; j++) {
	                        if (i == j)
	                            resultadoDiagonal += matriz[i][j];

	                    }
	                }

	                if (resultadoDiagonal == resultado2)
	                    result = true;
	            }

	        }

	    }

	    console.log(result);
	    return result;


	}

	function specialMerge(merge1, merge2) {

	    resultado = [];
	    conjunto = [];

	    if (merge1.length > 0 && merge2.length > 0) {
	        conjunto = merge1.concat(merge2);
	        console.log(conjunto);
	        menor = 0;

	        conjunto.forEach(x => (x == null) ? conjunto.splice(conjunto.indexOf(x), 1) : x)

	        while (conjunto.length > 0) {

	            for (var i = 0; i < conjunto.length; i++) {
	                if (conjunto[i] != null) {
	                    if (i == 0)
	                        menor = conjunto[i];
	                    else if (conjunto[i] < menor)
	                        menor = conjunto[i];
	                }

	            }

	            conjunto.splice(conjunto.indexOf(menor), 1)
	            resultado.push(menor)

	            //console.log(conjunto);
	            console.log(resultado);
	        }
	    }
	}

	function justify(parrrafo, ancho) {
	    console.log("hola\nmundo")
	    separaLinea = "\n";
	    lineaAux = "";
	    indexEspacios = [];
	    var key = 0;
	    var keyFinal = 0;
	    conjunto = [];
	    arrayFinal = [];
	    //cada linea debe tener el mismo ancho
	    //las palabras no deben ser separadas, la sepracion deber ser hecha en esapcios
	    //cada linea no debe empezar ni terminar con un espacio
	    //para completar la linea los eapacios deben ser equitativamente distribuidos
	    //la ultima linea no debe ser justificada
	    //cada linea debe ser separada por "\n"	
	    //validar que cada linea termine con " "

	    // 1 validar que al completar el ancho requerido, no separe una palabra o termine en espacio(s), 
	    //	 si lo hace la palabra formara parte de la siguiente linea (validar el efecto en las demas y ultima linea)

	    try {
	        for (var i = 0; i < parrrafo.length; i++) {
	            if (parrrafo.length > ancho) {
	                lineaAux += parrrafo[i];
	                if ((lineaAux.length) % ancho == 0 && i != 1 && i != ancho) //asegurar que siempre se cumpla el ancho requerido
	                {
	                    if (parrrafo.charAt(i + 1) != " ") {
	                        lineaAux = lineaAux.substring(0, lineaAux.lastIndexOf(" "))

	                        parrrafo = parrrafo.slice(lineaAux.length + 1)
	                        parrrafo.trim()

	                        while (lineaAux.indexOf(" ") != -1) {
	                            siguiente = lineaAux.slice(0, lineaAux.indexOf(" ") + 1);
	                            conjunto[key] = siguiente;
	                            lineaAux = lineaAux.slice(lineaAux.indexOf(" ") + 1);
	                            if (lineaAux.indexOf(" ") == -1) {
	                                key++;
	                                conjunto[key] = lineaAux;
	                                //gestionar el map o convertidrlo en array para mas versatilidad
	                            }

	                            key++;
	                        }

	                        if (conjunto.length > 0) {
	                            for (var j = 0; j < conjunto.length; j++) {
	                                if (j == (conjunto.length - 1)) {
	                                    j = -1;
	                                    continue;
	                                }
	                                conjunto[j] += " ";
	                                linea = conjunto.join("")
	                                if (linea.length == ancho) {
	                                    i = -1;
	                                    lineaAux = "";
	                                    arrayFinal[keyFinal] = linea;
	                                    linea = "";
	                                    keyFinal++;
	                                    key = 0;
	                                    break;
	                                }
	                            }
	                            conjunto = null;
	                            conjunto = [];
	                        } else {
	                            i = -1;
	                            lineaAux = "";
	                            arrayFinal[keyFinal] = linea;
	                            linea = "";
	                            keyFinal++;
	                            key = 0;
	                        }
	                    } else {
	                        parrrafo = parrrafo.slice(lineaAux.length + 1)
	                        parrrafo.trim()
	                        i = -1;
	                        arrayFinal[keyFinal] = lineaAux;
	                        lineaAux = "";
	                        linea = "";
	                        key = 0;
	                        keyFinal++;
	                    }
	                }
	            } else {
	                arrayFinal[keyFinal] = parrrafo;
	                parrrafo = "";
	            }
	        }
	    } catch (error) {
	        console.error(error);
	    }

	    console.log(arrayFinal.join("\n"));

	    // 2 reasignar la variable con la frase sin la linea tomada
	    // 3 completar con espacios entre palabras para ajustar la linea al ancho requerido
	    // 4 no completar con espacios al final de la ultima palabra no separada

	    //console.log(linea);

	}

	function mixNames(names, lastName) {
	    fullNames = [];
	    try {
	        combiLastName = lastName.map(x => lastName.map(y => y + " " + x)).flat();
	        combiName = names.map(x => names.map(y => y != x ? y + " " + x : "")).flat();
	        combiName = combiName.filter(x => x != "");
	        fullNames = combiName.map(x => combiLastName.map(y => x + " " + y)).flat();
	        console.log(fullNames.join("\n"));
	    } catch (error) {
	        console.log(error);
	    }
	}

	function LongestSubstring(cadena1, cadena2) {
	    result = "";
	    arrayCadena1 = [];
	    arrayCadena2 = [];
	    arrayCadenaResult = [];
	    try {
	        for (i = 0; i < cadena1.length; i++)
	            arrayCadena1[i] = cadena1[i];

	        for (i = 0; i < cadena2.length; i++)
	            arrayCadena2[i] = cadena2[i];

	        arrayCadenaResult = arrayCadena1.map(x => arrayCadena2.map(y => x != y ? x : ""));
	        arrayCadenaResult = arrayCadenaResult.map(x => (x.filter(y => y == "")).length > 0 && (x.filter(y => y == " ")).length == 0 ? [] : x)
	        arrayCadenaResult = arrayCadenaResult.filter(x => x.length > 0);
	        arrayCadenaResult = arrayCadenaResult.map(x => x[0]);
	        console.log(arrayCadenaResult.join("").trim());

	    } catch (error) {
	        console.log(error);
	    }
	}

	function anotherSerie(num) //3,4,4,12,6,20,9,28,13,36,18,44
	{
	    try {

	    } catch (error) {
	        console.log(error);
	    }
	}

	function drawNumbers(num) {
	    numeros = [
	        [],
	        [],
	        [],
	        [],
	        [],
	        []
	    ];
	    sumaIndice = 0;
	    try {
	        num = num.toString().split("");

	        for (k = 0; k < num.length; k++) {
	            valor = num[k];
	            for (i = 0; i < 5; i++) {
	                for (j = 0; j < 3; j++) {
	                    switch (valor) {
	                        case "0":
	                            if (i != 0 && i != 4 && j == 1)
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "1":
	                            if (j == 2)
	                                numeros[i][j + sumaIndice] = "*";
	                            else
	                                numeros[i][j + sumaIndice] = " ";
	                            break;
	                        case "2":
	                            if ((i == 1 && j != 2) || (i == 3 && j != 0))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "3":
	                            if ((j == 0 && (i == 1 || i == 3)) || (j == 1 && (i == 1 || i == 3)))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "4":
	                            if ((j == 0 && (i == 3 || i == 4)) || (j == 1 && i != 2))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "5":
	                            if ((i == 1 && j != 0) || (i == 3 && j != 2))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "6":
	                            if ((j == 1 && (i == 1 || i == 3)) || (j == 2 && i == 1))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "7":
	                            if ((j == 0 && i != 0) || (j == 1 && !(i == 0 || i == 2)))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "8":
	                            if ((j == 1 && (i == 1 || i == 3)))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                        case "9":
	                            if ((j == 1 && (i == 1 || i == 3)) || (j == 0 && i == 3))
	                                numeros[i][j + sumaIndice] = " ";
	                            else
	                                numeros[i][j + sumaIndice] = "*";
	                            break;
	                    }

	                    if (j == 2)
	                        numeros[i][j + sumaIndice + 1] = " ";
	                }
	            }
	            sumaIndice += 4;
	        }
	        console.log(numeros.map(x => x.join("")).join("\n"));

	    } catch (error) {
	        console.log(error);
	    }
	}

	function drawOctagon(num) {
	    matrix = [];
	    contador = 0;
	    valorIndice = num - 1;
	    valorIndiceAux = 1;
	    try {
	        for (i = 0; i < (2 * (num - 1) + num); i++)
	            matrix.push([]);

	        for (i = 0; i < matrix.length; i++) {
	            contador = 0;
	            for (j = 0; j < matrix.length; j++) {
	                if (i == 0 || i == matrix.length - 1) {
	                    //espacios vacios cuando sea las interaciones (num-1) primeras y las (num-1) ultimas 
	                    if (contador < num - 1 || (matrix.length - (num - 1) <= j)) {
	                        matrix[i][j] = " ";
	                        contador++
	                    } else {
	                        matrix[i][j] = "*";
	                    }
	                } else if (i > 0 && i <= (num - 2)) {
	                    if ((valorIndice - 1) == j || (matrix.length - valorIndice) == j)
	                        matrix[i][j] = "*";
	                    else
	                        matrix[i][j] = " ";
	                } else if (i >= (num - 1) && i < (matrix.length - (num - 1))) {
	                    if (j == 0 || j == (matrix.length - 1))
	                        matrix[i][j] = "*";
	                    else
	                        matrix[i][j] = " ";
	                } else if (i >= (matrix.length - (num - 1)) && i < (matrix.length - 1)) {
	                    if ((j == valorIndiceAux && valorIndiceAux <= (num - 2)) || ((matrix.length - 1) - valorIndiceAux) == j)
	                        matrix[i][j] = "*";
	                    else
	                        matrix[i][j] = " ";
	                }


	            }
	            if (i > 0 && i <= (num - 2)) {
	                valorIndice--;

	            } else if (i >= (matrix.length - (num - 1)) && i < matrix.length) {
	                valorIndiceAux++;
	            }

	        }
	    } catch (error) {
	        console.log(error);
	    }
	    console.log(matrix.map(x => x.join("")).join("\n"));
	}

	function findColor(x, y) {
	    resultado = "";
	    try {
	        distancia = Math.pow(Math.pow((0 - x), 2) + Math.pow((0 - y), 2), 1 / 2); //distancia del punto dado al origen que es el centro de la circunferencia

	        if (distancia <= 4) {
	            if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
	                if ((distancia > 0 && distancia < 1) || (distancia > 2 && distancia < 3))
	                    resultado = "black";
	                else
	                    resultado = "white";
	            } else if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
	                if ((distancia > 0 && distancia < 1) || (distancia > 2 && distancia < 3))
	                    resultado = "white";
	                else
	                    resultado = "black";
	            } else
	                resultado = "black";
	        } else
	            resultado = "el punto no pertenece a la circunferencia";


	        console.log(resultado);
	    } catch (error) {
	        console.log(error);
	    }
	}