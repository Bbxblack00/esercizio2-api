function mailGenerator() {
    $.ajax({
        url: '',
        method: 'GET',
        success: function(data) {
            const res = data.response;
            console.log(res);
            generateMail(res);
        },
        error: function() {
            console.log('error');
        }
    });
  }

function init() {
}
document.addEventListener('DOMContentLoaded', init);
