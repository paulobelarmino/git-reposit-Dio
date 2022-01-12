var nome = "Paulo Belarmino";
//alert("Meu primeiro JavaScript");
var lista = ["a", "b", "c", "d", "e", "f"];
console.log(lista);
lista.push("g");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
var fruta = {nome:"uva", cor:"roxa", acidez: 4 };
console.log(fruta.acidez);
var nome = prompt("Digite seu nome");
console.log(nome);
var data = new Date();

console.log(data.ge);
function soma( n1,n2){
    return n1 + n2
}
var somado = soma(1,2);
console.log(somado);