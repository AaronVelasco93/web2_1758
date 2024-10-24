function generarQR() {
    //El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto
    //El método trim( ) elimina los espacios en blanco en ambos extremos del string
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input3 = document.getElementById('input3').value.trim();
    var input4 = document.getElementById('input4').value.trim();
    var textoConcatenado = input1 + ',' + input2 + ',' + input3+','+ input4;

    console.log(input1);

    if (textoConcatenado === ',,') {
        alert('Por favor, ingrese al menos un texto para generar el código QR.');
        return;
    }

   // var qrCodeURL = 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + encodeURIComponent(textoConcatenado);
    var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

    

    //En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName
    var qrImg = document.createElement('img');
    //agregan los atrubutos de la etiqueta de HTML
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR';
    console.log(qrImg.src);
    //La propiedad classList de JavaScript es una propiedad del objeto Element que nos permite acceder y manipular los datos de nodos HTML en el DOM.
    //Esta propiedad en particular nos devuelve un listado de los valores del atributo class de un elemento (DOMTokenList). En este sentido es una propiedad de solo lectura.
    qrImg.classList.add('qr-code');

    /*
    El DOM representa un documento HTML completo como un solo objeto. Para crear el DOM, el navegador web que lee el 
    archivo HTML toma todas sus partes, desde el elemento <html> raíz hasta las etiquetas <span> más pequeñas,
    y las devuelve como un objeto que el JavaScript comprende
    */ 
    document.getElementById('qr-code').appendChild(qrImg);

    //Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}