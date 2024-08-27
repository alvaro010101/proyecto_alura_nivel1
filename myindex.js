function encriptar() 
{
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titlo-mensaje");
  let parrafo = document.getElementById("parrafo");
  
  let textoremplazo = texto.replace(/e/gi, "enter").replace(/i/gi,"imes").replace(/o/gi, "ober").replace(/u/gi,"ufat").replace(/a/gi,"ai");

    if(document.getElementById("texto").value.length != 0){

      document.getElementById("texto").value = textoremplazo;      
      document.getElementById("titlo-mensaje").textContent = "Texto encriptado con exito";
      document.getElementById("parrafo").textContent= "";
    }
    else{
      document.getElementById("titlo-mensaje").textContent ="No se encontro ningun texto";
      document.getElementById("parrafo").textContent="Ingresa el texto que deseas encriptar o desencriptar"
      alert("ingrese Texto que desee procesar");
    }
  // alert(textoremplazo);
}

function desencriptar()
{
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titlo-mensaje");
  let parrafo = document.getElementById("parrafo");

  let textoremplazo = texto.replace(/enter/gi, "e").replace(/imes/gi,"i").replace(/ober/gi, "o").replace(/ufat/gi,"u").replace(/ai/gi,"a");

  if(document.getElementById("texto").value.length != 0){

    document.getElementById("texto").value = textoremplazo;      
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent= "";
  }
  else{
    document.getElementById("titlo-mensaje").textContent="Ningún texto encontrado";
    parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar"
    alert("ingrese Texto que desee procesar");
  } 
}

