$(document).ready(function(){

	$("#submitbutton").bind("click",function(){
		
		var password = $("#password").val();
		var passwordcfm = $("#passwordcfm").val();
		
		if(password != passwordcfm){
			alert("wrong password confirm");
		}else{
			$("#registerform").submit();
		}
		
	});
	
});
