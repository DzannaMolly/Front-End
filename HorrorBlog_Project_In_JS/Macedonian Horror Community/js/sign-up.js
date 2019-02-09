$(function() {

    $('#sign-up-form').on('submit', function(event) {
        event.preventDefault();
        
        var username = $('input[name=username]').val();

        var password = $('input[name=password]').val();

        callApiForWrite(username, password);
    });
});

function callApiForWrite(username, password) {
    console.log('yes');

    $.ajax({
        type: "POST",
        url: 'http://localhost:8080/sign-up',
        data: {username: username, password: password},
        success: function() {
            console.log('post success');
        },
      });
}