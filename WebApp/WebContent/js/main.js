function eventLoginButton() {
    $('#login').on('click', isLoginCorect);
}


    $('#btnAddDiv').on('click', addDivOne);


$('.input-group-addon').ready(function() {
    $("i.fa").popover({'trigger':'hover'});
});

function emailValidationConditions(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function passValidationConditions(pass) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(pass);
}

function Close() {
    $('.empty-alert').hide();
    $('.validation-alert').hide();
    $('.accept-alert').hide();
}
function isLoginCorect(event) {

    Close();

    event.preventDefault();

    var email = validationEmail($('#email'));
    var password = validationPass($('#password'));

    if (email && password) {
       parent.window.open('home-page.html');
        parent.window.close('index.html');
    }
}

function validationEmail($input) {


    var textFromEmail = $input.val();
    var isValid = true;


    if (textFromEmail.length == 0) {
        isValid = false;
        $input.closest('.login-boxes').find('.empty-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-error');
    }
    else if (!emailValidationConditions(textFromEmail)) {
        isValid = false;
        $input.closest('.login-boxes').find('.validation-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-error');
    }
    else {
        $input.closest('.login-boxes').find('.accept-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-accept');
    }
    return isValid;
}

function validationPass($input) {


    var textFromPass = $input.val();
    var isValid = true;


    if (textFromPass.length == 0) {
        isValid = false;
        $input.closest('.login-boxes').find('.empty-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-error');
    }
    else if (!passValidationConditions(textFromPass)) {
        isValid = false;
        $input.closest('.login-boxes').find('.validation-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-error');
    }
    else {
        $input.closest('.login-boxes').find('.accept-alert').show();
        $input.closest('.login-boxes').find('.input-group').addClass('border-accept');
    }
    return isValid;
}


/**************Бутон добавящ div****************/
function addDivOne(e){


    e.preventDefault();
    var i = 0;

    /*$('content-div').find('li').each(function(){

        if(i<1){
            $('#content-div').append('<div id="1" class = "new-div">Test</div>');
            i++;

        }

        else{
            $('#content-div').append('<div id="1" class = "new-div-1">Test</div>');
            i = 1;

        }

        $('content-div').addClass('new-div' + i);

    });*/

 $('#content-div').append('<div id="1" class = "new-div">Test</div>');
oddEven();

       /* var $sampleDiv = $('<div >', {

            'class': 'new-div-1'
        })
        $('#content-div').append($sampleDiv);*/


    //var id = "sample-div";

/*    var $sampleDiv = $('<div >', {
      *//* "id":"1",*//*
        'class': 'new-div-1'
        })
    $('#content-div').append($sampleDiv);*/


}

function oddEven(){
    $('#content-div').find('div:even').addClass('new-div-1');

        /*css( "background-color", "#ff6464" );*/
}

















