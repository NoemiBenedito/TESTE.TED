//  linha 3 criando uma fila 
//  linha 4 retorna a uma matriz com o tamanho dos elementos
export function criarFila(tamanho=10){
    return [... new Array(tamanho)]
}
// linha 9 inserindo o item  na fila
//  linha 10 indexOf percorre toda a fila para ver se encontra ou não algo

export function inserirFila(item,fila){
    const pedaco=fila.indexOf(undefined)

 if(pedaco===-1){
    console.log("está cheia")
    return 
 }
  fila[pedaco]=item
}

// retira o item na fila 
// for é para andar i+1 para frente 
export function retirarFila(item){
    if(item[0]=== undefined){
        console.log("está vazia")
        return
    }

    let pedacoPegado=item[0]

    for(let i=0;i<fila.length;i++){
        item[i]=item[i+1]

    }
    return pedacoPegado

}


