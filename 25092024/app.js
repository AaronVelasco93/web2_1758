let frutas = [];
let fruta = prompt("Agrega un fruta");

frutas.push(fruta);
while(confirm("Deseas agregar otra fruta?")){
    let fruta2 = prompt("Agrega otra  fruta?");
    frutas.push(fruta2);
}


console.log("Estas son las frutas que  agregaste");
for(let fruta of frutas){
    console.log(fruta);
    alert(`${fruta}`);
}
