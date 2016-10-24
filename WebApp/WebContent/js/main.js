function eventLoginButton() {
    $('#login').on('click', isLoginCorect);
}


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
        alert("OK");
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


/********* Чернова ***************
 *
 * $input.closest('.login-boxes').find('#email').val()) || !passValidationConditions($input.closest('.login-boxes').find('#password').val()
 *
 function emailValidation(event){

 Close();

 event.preventDefault();

 var valid= true;
 var emailSubmit = $('#email').val();

 if (emailSubmit.length == 0) {
 valid = false;
 $('.email-alert').show();
 }
 else if (!emailValidationConditions(emailSubmit)) {
 valid = false;
 $('.email-validation').show();
 }
 else {
 $('.email-accept').show();
 }
 return valid;
 }

 function passValidation(event){

 Close();

 event.preventDefault();

 var valid= true;
 var passSubmit = $('#email').val();

 if (passSubmit.length == 0) {
 valid = false;
 $('.pass-alert').show();
 }
 else if (!passValidationConditions(passSubmit)) {
 valid = false;
 $('.pass-validation').show();
 }
 else {
 $('.pass-accept').show();
 }
 return valid;
 }



 function emailValidation(e) {

    Close();
    var emailSubmit = $('#email').val();


    if (emailSubmit.length == 0 || passSubmit.length == 0) {
        $('.email-alert').show();
    }
    else if (!emailValidationConditions(emailSubmit)) {
        $('.email-validation').show();
    }
    else {
        $('.email-accept').show();
       //return valid;
    }

}

 function passValidation(e) {

   // var valid = true;
    Close();

    var passSubmit = $('#password').val();

    if (passSubmit.length == 0) {
        $('.pass-alert').show();
    }
      else if (!emailValidationConditions(emailSubmit)) {
     $('.pass-validation').show();
     }
    else {
        $('.pass-accept').show();
     //   return valid;
    }

}*/
















