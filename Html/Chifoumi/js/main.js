(function () {
  if (localStorage != "undefined") {
    var uScore = localStorage.getItem("uScore", uScore);
    var cScore = localStorage.getItem("cScore", cScore);
    document.getElementById('userScore').innerHTML = uScore;
    document.getElementById('cpuScore').innerHTML = cScore;
  }
})();

var startGame = function (n) {
  if (localStorage != "undefined") {
    var uScore = parseInt(document.getElementById('userScore').innerText);
    var cScore = parseInt(document.getElementById('cpuScore').innerText);
  } else {
    var uScore = localStorage.getItem("uScore", uScore);
    var cScore = localStorage.getItem("cScore", cScore);
  }
  var userChoice = parseInt(n);
  var cpuChoice = getCpuChoice();
  var stmt = "User: " + convertChoiceToStr(userChoice) + "<br>" + "CPU: " + convertChoiceToStr(cpuChoice);
  var result = getResult(userChoice, cpuChoice);
  display(stmt, result);
  switch (result) {
    case 1:
      document.getElementById('userScore').innerHTML = ++uScore
      break;
    case 2:
      document.getElementById('cpuScore').innerHTML = ++cScore

      break;
  }
  localStorage.setItem("cScore", cScore);
  localStorage.setItem("uScore", uScore);
}

var getCpuChoice = function () {
  return Math.floor(Math.random() * 3) + 1;
}

var convertChoiceToStr = function (n) {
  switch (n) {
    case 1:
      return "Pierre";
      break;
    case 2:
      return "Feuille";
      break;
    case 3:
      return "Ciseaux";
      break;
    default:
      return "Erreur";
  }
}

var getResult = function (u, c) {
  if (u == 1) {
    switch (c) {
        case 1:
          return 0;
        case 2:
          return 2;
        case 3:
          return 1;
    }
  }
  if (u == 2) {
    switch (c) {
        case 1:
          return 1;
        case 2:
          return 0;
        case 3:
          return 2;
    }
  }
  if (u == 3) {
    switch (c) {
        case 1:
          return 2;
        case 2:
          return 1;
        case 3:
          return 0;
    }
  }
}

var display = function (stmt, result) {
  document.getElementById('main').style.display = "none";
  document.getElementById('temp').style.display = "block";
  document.getElementById('stmt').innerHTML = stmt;
  switch (result) {
    case 1:
      setTimeout (function () {$("#result").html("Gagné ! :)").show("puff");}, 1000);
      break;
    case 2:
      setTimeout (function () {$("#result").html("Perdu ! :(").show("puff");}, 1000);
      break;
    case 0:
      setTimeout (function () {$("#result").html("Égalité ! :/").show("puff");}, 1000);
      break;
  }
  setTimeout (function () {
      document.getElementById('main').style.display = "block";
      document.getElementById('temp').style.display = "none";
      $("#result").html("").hide();
  }, 3000);
}
