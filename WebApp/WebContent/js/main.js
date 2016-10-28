function eventLoginButton() {
    $('#login').on('click', isLoginCorect);
}


$('#btnAddDiv').on('click', addDivOne);


$('.input-group-addon').ready(function () {
    $("i.fa").popover({'trigger': 'hover'});
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
        parent.window.location.href = "home-page.html";
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

/****************** Тест код ***********************/


function addDivOne(event) {
    event.preventDefault();

        $("#content-div").append('<li class="new-div list-group-item" id="1">' +
     '<div class = "row" style="min-height: 75px;">' +
     'New Div' +
     '<button type="button" class="btn pull-right btn-danger btn-close">Изтриване</button>' +
     '</div>' +
     '</li>');

   /* $.get("newDivContainer.html", function (source) {
        $('#content-div').append(source);
    });*/

    oddEven();
    removeDiv();
}

function oddEven() {
    $('#content-div').find('li:even').addClass('new-div-1');
}

function removeDiv() {

    $('.btn-close').on('click', function () {

        $(this).closest('li.new-div').remove();
    });
}

/***************** Край на тест Код *****************/


/**************Бутон добавящ div****************/

/*function addDivOne(e) {
 e.preventDefault();

 $("#content-div").append('<div id="1" class = "new-div">New Div<button type="button" class="btn pull-right btn-danger btn-close">Изтриване</button></div>');

 *//*    $.get("newDivContainer.html", function(data){
 $('#content-div').append(data);
 });*//*

 oddEven();
 removeDiv();
 }


 function oddEven() {
 $('#content-div').find('div:even').addClass('new-div-1');

 }

 *//*function removeDiv(){
 //e.preventDefault();
 $('.btn-close').on('click', function(){

 $('#content-div').find('#1').last().remove();
 })

 }*//*

 function removeDiv(){
 //e.preventDefault();
 $('.btn-close').on('click', function(){

 $(this).parent('div.new-div').remove();
 });
 }*/

/**************Бутон добавящ div Край ****************/


/************ Layout *******************/

$('#list').click(function (event) {
    event.preventDefault();
    $('.change-layout .change-child').addClass('list-group-item');
});

$('#grid').click(function (event) {
    event.preventDefault();
    $('.change-layout .change-child').removeClass('list-group-item');
    $('.change-child .change-child').addClass('grid-group-item');
});

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



/*function removeDiv(){
 //e.preventDefault();
 $('.btn-close').on('click', function(){                        ////// Премахва себе си (В случая бутона се премахва, но DIV остава)

 $('.btn-close').closest('#1').find(this).remove();
 })

 }*/





/*function removeDiv(){
 //e.preventDefault();
 $('.btn-close').on('click', function(){                   /////// Изтрива DIV, но само ако се иска изтриване на последния

 $('#content-div').find('#1').last().remove();
 })

 }*/


/*$.ajax({
 url: "newDivContainer.html",
 success: function (data) { $('#content-div').append(data); },   ///// Взимане на код от друг файл
 dataType: 'html'
 });*/



