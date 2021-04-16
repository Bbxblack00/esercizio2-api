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


  }

function init() {

  boxNumberGenerator();

}
document.addEventListener('DOMContentLoaded', init);
