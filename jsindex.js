$(function() {
  $('a[href^="#"]').on("click", function(e){
  	e.preventDefault();

  	let target = this.hash;
  	let $target = $(target);

    if($(window).width()<641){
        $('#responsiveMenu').show();
        $('#menu').hide();
      }

  	$('html, body').animate({
  		'scrollTop' : $target.offset().top-70
  	}, 1000, 'swing', function(){
  		window.location.hash = $target;
  	})

  })

   $('#up').on("click", function(){

  	$('html, body').animate({
  		'scrollTop' : 0,
  	}, 1000, 'swing')

  })

  $(window).scroll(function(){
  	 if ($(this).scrollTop() >300) 
	  {
	  	$("#up").show()
	  }else
	  {
	  	$("#up").hide()
	  }
  })


  $('#responsiveMenu').on('click', function(){
    $('#responsiveMenu').hide();
    $('#menu').show();

  })

});
