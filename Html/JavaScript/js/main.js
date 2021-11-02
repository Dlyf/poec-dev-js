// Commentaire sur une ligne

/*
  Commentaire de type bloc
*/

/*
  Les variables
*/

var a = 2;
var b = "2";
var result = a + b;


/*
  Booléens
*/

var vrai = true;
var faux = false;



/*
  Forcer le type d'une variable (caster)
*/

var str = "37"
var num = parseInt(str);


/*
  Échapement
*/

var str = "Elle dit \"non\" ";



/*
  Les fonctions
*/

var sayHello = function (name) {
  alert("Hello " + name);
};

function sayHello2 (name) {
  alert("Hello2" + name);
}

var addOne = function (n) {
  return parseInt(n) + 1;
}

var res = addOne(12);



/*
  Les boucles
*/

// FOR
for (var i = 0; i < 10; i++) {
  //console.log(i);
}

// WHILE
var i = 0;
while (i < 10) {
  //console.log(i);
  i++;
}

// DO WHILE
var i = 0;
do {
  if (i == 5) {
    break;
  }
  //console.log(i);
  i++;
} while (i < 10);



/*
  Les tableaux
*/


var fruits = [
  "Banane",
  "Cerise",
  "Fraise",
  "Citron"
];

var displayFruits = function (arr) {
  var str = new String();
  var ul = document.createElement('ul');
  for (var i = 0; i < arr.length ; i++) {
    var li = document.createElement('li');
    var text = document.createTextNode(arr[i]);
    li.append(text);
    ul.append(li);
  }
  document.body.append(ul);
};

// displayFruits(fruits);

var users = {
  "user1": {
      "firstname": "Glenn",
      "surname": "Le Gac",
      "age": 29,
      "role": "Formateur"
  },
  "user2": {
      "firstname": "John",
      "surname": "Doe",
      "age": 99,
      "role": "Inconnu"
  }
};

var displayUsers = function (arr) {
  for (var key in arr) {
      if (arr.hasOwnProperty(key)) {

        var pFirstName = document.createElement('p');
        var pSurName = document.createElement('p');
        var pAge = document.createElement('p');
        var pRole = document.createElement('p');

        var firstNameTxt = document.createTextNode("Prénom: " + arr[key].firstname);
        var surNameTxt = document.createTextNode("Nom: " + arr[key].surname);
        var ageTxt = document.createTextNode("Age: " + arr[key].age);
        var roleTxt = document.createTextNode("Role: " + arr[key].role);

        pFirstName.append(firstNameTxt);
        pSurName.append(surNameTxt);
        pAge.append(ageTxt);
        pRole.append(roleTxt);

        document.body.append(pFirstName);
        document.body.append(pSurName);
        document.body.append(pAge);
        document.body.append(pRole);

        document.write("<br>");
      }
  }
};
displayUsers(users);
