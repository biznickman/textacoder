window.leadMagnetDismissed = false;

function hideError(){
  $('#leadMagnetMessage').hide();
}
function showError(error){
	$('#leadMagnetMessage').text(error);
  if( !$('#leadMagnetMessage').hasClass('error') ){
    $('#leadMagnetMessage').addClass('error');
  }
	$('#leadMagnetMessage').show();
}

function showSuccess(message) {
  $('#leadMagnetMessage').text(message);
  if( $('#leadMagnetMessage').hasClass('error') ){
    $('#leadMagnetMessage').removeClass('error');
  }
  $('#leadMagnetMessage').show();
}

function getTimezoneName() {
  timezone = jstz.determine()
  return timezone.name();
}

function validateEmail(){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test($('#leadMagnetEmail').val());
}

function leadPayload(){
	return {
		email: $('#leadMagnetEmail').val(),
		firstName: $('#leadMagnetFirstName').val(),
    timeZone: getTimezoneName()
	};
}


// Handle scroll appearance
$(document).ready(function(){
  $(window).scroll(function(){
    if( $(window).scrollTop() > 800 && !window.leadMagnetDismissed ) {
      // Make it appear
      $('#lead-magnet-box').addClass('fade-in');
    } else {
      // Make it disappear if shown
    }
  });
});

$('#closeLeadbox').on('click', function(){
  $('#lead-magnet-box').addClass('fade-out');
  $('#lead-magnet-box').removeClass('fade-in');
  window.leadMagnetDismissed = true;
});

// Handle the submission of the form
$('#leadBoxSubmit').on('click',function(){
  console.log('Lead box submit clicked');
	if( !validateEmail() ) {
		showError("Please enter a valid email address.");
	}else{
    hideError();
    console.log('LEAD PAYLOAD: ', leadPayload());
		$.ajax({
			type : "POST",
			url: 'https://hooks.zapier.com/hooks/catch/247497/48zdxi/',
      dataType: 'json',
      data : JSON.stringify(leadPayload()),
      success: function(data, status, xhr){
      	if (data.status == "success") {
      		$('#leadMagnetForm').hide();
      		showSuccess("Thanks ... Check your inbox!")
      	} else {
      		showError("Form submission failed. Please try again!")
      	}
      }
    });
	}
});
