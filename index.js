import { criarFila,inserirFila,retirarFila } from './fila.js'
// declarando a fila 
const minhafila=criarFila(3)
console.log(minhafila)

// inserindo valores
inserirFila(minhafila,"abacaxi")
inserirFila(minhafila,"bola")
inserirFila(minhafila,"casa")

console.log("fila",minhafila)

// retirando valores 
retirarFila(minhafila)
retirarFila(minhafila)
retirarFila(minhafila)

console.log("fila",minhafila)