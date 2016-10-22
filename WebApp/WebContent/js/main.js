/*function loginBtnEvent() {
	$('#login').on('click', userAlert());
}*/



/*$('#login').on('click', function(){
	
	var userText = $('#username').val();
	
	if(userText == ""){
		$('.user-alert').show();
	}
	else{
		$('.user-alert').hide();
	}
	
})*/

function userAlert() {
	$('#login').on('click', function(){
		
		var userName = $('#username').val();
		
		if(userName == ""){
			$('.user-alert').show();
			$('.user-alert-short').hide();
		}
		else if(userName.length < 6){
			$('.user-alert').hide();
			$('.user-alert-short').show();
		}
		else{
			$('.user-alert').hide();
			$('.user-alert-short').hide();
			alert("Ok");
		}
		  
	})
	
}