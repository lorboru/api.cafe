








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




window.onscroll = function () { myFunction() };

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function ativo(objeto) {
  var ativos = document.getElementsByClassName("active")
  for (var i = 0; i < ativos.length; i++) {
    ativos[i].classList.remove("active");
  }
  objeto.classList.add("active")
}










function Enviar() {

  var nome = document.getElementById("nomeid");


  if (nome.value != "") {
    alert('Obrigado ' + nome.value + ', sua avaliação é muito importante! Aguarde o nosso retorno em breve - Capulus Café ®!');
  }

}