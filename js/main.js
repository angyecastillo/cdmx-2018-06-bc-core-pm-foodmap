/*window.onload = function () {
  let contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}*/
$(document).ready(function() {
  setTimeout(function() {
    $('body').fadeOut(700, function() {
      $(location).attr('href', 'home.html');
    });
  }, 2000);
});
