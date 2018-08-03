$(function () {

  var doSomeMagic = function (effect) {
    $('#magic').hide().show(effect, 1000);
  };

  $("#demo").on("click", function () {
    doSomeMagic( $("#menu").val() );
  });

});
