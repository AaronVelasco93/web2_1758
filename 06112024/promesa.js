/* 
const operacionPromesa = (numero1,numero2)=>{
    const resultado = numero1+numero2;
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(resultado)
        },800)
    });
}
operacionPromesa (1,3)
    .then(result =>console.log(result));
    */

const  miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve( console.log("Operacion se genero") );
        }else{
            reject("Error en la operacion");
        }
    },1000);

});


