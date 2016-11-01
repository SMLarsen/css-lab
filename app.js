$(document).ready(function () {

  $('input[name=border-style]').on('click change', function (event) {
    event.preventDefault();
    var value = $(this).parent().find("input[name=border-style]:checked").val();
    $('section').children().css('border-style', value);
  });

  $('input[name=favcolor]').on('change', function (event) {
    event.preventDefault();
    console.log(value);
    var value = $(this).parent().find("input[name=favcolor]").val();
    $('section').children().css('border-color', value);
  });

  $('input[name=border-width]').on('change', function (event) {
    event.preventDefault();
    var value = $(this).parent().find("input[name=border-width]").val();
    $('section').children().css('border-width', value);
  });

    $('input[name=margin]').on('click change', function (event) {
      event.preventDefault();
      var value = $(this).parent().find("input[name=margin]").val() + "px";
      $('section').children().css('margin', value);
    });

    $('input[name=padding]').on('click change', function (event) {
      event.preventDefault();
      var value = $(this).parent().find("input[name=padding]").val() + "px";
      $('section').children().css('padding', value);
    });

    $('input[name=float]').on('click change', function (event) {
      event.preventDefault();
      var value = $(this).parent().find("input[name=float]:checked").val();
      $('section').children().css('float', value);
    });

    $('input[name=display]').on('click change', function (event) {
      event.preventDefault();
      var value = $(this).parent().find("input[name=display]:checked").val();
      $('section').children().css('display', value);
    });

    $('input[name=animate]').on('click change', function (event) {
      event.preventDefault();
      $('section').children().removeClass('');
      var value = $(this).parent().find("input[name=animate]:checked").val();
      var setClass = 'animated ' + value;
      $('section').children().addClass(setClass);
    });

});
