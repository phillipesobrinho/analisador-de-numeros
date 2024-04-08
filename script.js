let num = document.querySelector("input#fnum")
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []



function isnum(n){
if (Number(n) >= 1 &&  Number(n) <=100){
    return true
}else{
    return falso
}
}

function islista(n, 1){
if(lista.indexOf(number(n)) != -1){
    return true
}else{
    return falso
}
}

function adicionar(){
if (isnum(num.value) && !islista(num.value, valores)){
    window.alert(`OK.`)

}else {

    window.alert(`Valor inválido ou já encontrado na lista.`)
}



}