// attraverso vue&axios scaricare 10 numeri interi e produrre le box
// corrispondenti, colorandone il bg verde nel caso di numeri pari
// e rossi nel caso di numeri dispari



function boxNumberGenerator() {
  $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function(data) {
          const res = data.response;
          console.log(res);
          stampBoxes(res);
      },
      error: function() {
          console.log('error');
      }
  });
  }

  function stampBoxes(num) {

    const target = $('#list');

    if (num % 2 == 0) {

      target.append('<li class="box bg-green">' + num + '</li>');

    } else {

      target.append('<li class="box bg-red">' + num + '</li>')

    }

  }

function init() {

  for (var i = 0; i < 10; i++) {
    boxNumberGenerator();
  }

}
document.addEventListener('DOMContentLoaded', init);
