 function loadPage(){
   // var input = document.getElementsByClassName(".aul");
   // input.addEventListener("onclick", crear);
   $(".aul").click(crear);
 }

//Creamos los <elementos> HTML para tajeta gris inicial
function crear (){
  var $tarjetaGris =$("<div />");
  var $tarjetitaGris =$("<div />");
  var $tarjetititaGris =$("<div />");
  var $inputTarjetaGris=$("<input />");
  var $labelTarjetaGris=$("<label />");
  var $aGuardar=$("<a />");
  var $espacio=$("<span />");
  var $ocultar = $(".ocultar");

  // console.log("pon atencion");

//Damos clases a los <elementos> html tarjeta gris inicial
  $tarjetaGris.addClass("section row stay-closer");
  $tarjetitaGris.addClass("left col m5");
  $tarjetititaGris.addClass("col s6 input-field color");
  $inputTarjetaGris.addClass("validate");
  $aGuardar.addClass("waves-effect waves-light btn");
  $aGuardar.text("Guardar");
  $espacio.text(" X ");
  $ocultar.addClass("hidde");


//Damos familia a los <elementos> html tarjeta gris inicial
  $tarjetaGris.append($tarjetitaGris);
  $tarjetitaGris.append($tarjetititaGris);
  $tarjetititaGris.append($inputTarjetaGris);
  $tarjetititaGris.append($labelTarjetaGris);
  $tarjetititaGris.append($aGuardar);
  $tarjetititaGris.append($espacio);

  //elemento con id para posicionar <elementos>s creados para tarjeta inicial
  $("#tarjetasplace").prepend($tarjetaGris);
  $aGuardar.click(mensaje);
//nuevo evento en boton guardar
/*   $(".aGuardar").click(guardar);

}

//función del elemento <aGuardar> al clikear
function guardar (){
  var $afterSaveWhiteCard=$("<div />");
  var $tarjet =$("<div />");
  var $tarjetititaGris =$("<div />");
  var $inputTarjetaGris=$("<input />");
  var $labelTarjetaGris=$("<label />");
  var $aGuardar=$("<a />");
  var $espacio=$("<span />");
  var $ocultar = $(".ocultar");

  console.log("pon atencion");//
*/
}


function mensaje(){
  var $inputTarjetaGris=$("<input />");
  $inputTarjetaGris.addClass("validate");


console.log($inputTarjetaGris.val());


}

$(document).ready(loadPage);


//ejecutar,
