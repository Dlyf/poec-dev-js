// Positionnement du flag
toogle = false;

// Séléction de l'élément bouton par son id
var btn = document.getElementById('toogle');

// Déclenchement d'une fonction sur l'évenement "clic"

btn.onclick = function () {
  toogleThis();
}



var toogleThis = function () {

  toogle = !toogle;

  var square1 = document.getElementsByClassName('square1')[0];
  var square2 = document.getElementsByClassName('square2')[0];

  if (toogle) {
    square1.style.backgroundColor = "green";
    square2.style.backgroundColor = "red";
  } else {
    square1.style.backgroundColor = "red";
    square2.style.backgroundColor = "green";
  }

  return;
}

var p = document.getElementsByTagName("p");
for (var i = 0; i < p.length; i++) {
  if ( !(i % 2) ) {
    p[i].style.color = "red";
  }

  p[i].onmouseover = function () {
    this.style.backgroundColor = "yellow";
  }
  p[i].onmouseout = function () {
    this.style.backgroundColor = "white";
  }
}
