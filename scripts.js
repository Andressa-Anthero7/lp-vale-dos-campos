$( window ).on( "load", function() {
		  	 setTimeout(() => {
				 	 $('.container').show();
				 	$('.modal').modal('show');
				 	$('.loader').hide();
				 	$('.img-loader').hide();
				}, '2000');

		} );


		$(document).on('click','#btn-aceita-termos-privacidade',function(){
				var video = document.getElementById("tag-video");
				
				setTimeout(() => {
				  video.play();
				}, '3000');
				

			});