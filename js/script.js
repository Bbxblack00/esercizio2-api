// attraverso vue&axios scaricare 10 numeri interi e produrre le box
// corrispondenti, colorandone il bg verde nel caso di numeri pari
// e rossi nel caso di numeri dispari




// chiedere il numero di box da generare all'utente attraverso un prompt
// e generare anche una box rappresentante la somma dei valori ricevuti





// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.


// Utilizzando vue, stampiamo a schermo una card per ogni album.


// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


function boxNumberGenerator() {
  // $.ajax({
  //     url: 'https://flynn.boolean.careers/exercises/api/random/int',
  //     method: 'GET',
  //     success: function(data) {
  //         const res = data.response;
  //         console.log(res);
  //         stampBoxes(res);
  //     },
  //     error: function() {
  //         console.log('error');
  //     }
  // });


  // AXIOS
  new Vue({
        el: '#app',
        data: {
            values: []
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(artist => {
                    // STRATEGIA 1
                    // this.values = data.data.response;
                    // STRATEGIA 2

                    const artists = artist.data.response;
                    console.log(artists);
                    // const values = artist;
                    // for (let i=0;i<values.length;i++) {
                    //     const value = values[i];
                    //     const isPair = value % 2 == 0;
                    //     this.values.push({
                    //         value,
                    //         class: isPair ? 'bg-green' : 'bg-red'
                    //     });
                    // }
                })
                .catch(() => console.log('error'));
        }
    });
}
function init() {

  boxNumberGenerator();

  }


document.addEventListener('DOMContentLoaded', init);
