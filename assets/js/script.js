if(window.SimpleSlide){
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 100000,
    nav: true  // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'banner-home',
    time: 5000
  });

  new SimpleSlide({
    slide: 'portifolio', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    nav: true  // abiliata a navegação
  });

  new SimpleSlide({
    slide: 'depoimentos',
    time: 5000,
  });

  new SimpleSlide({
    slide: 'sobre',
    time: 5000,
    nav: true
  });

  new SimpleSlide({
    slide: 'infra',
    time: 5000,
    nav: true
  });

  new SimpleSlide({
    slide: 'teste',
    time: 10000,
    nav: true
  })
}

if(window.SimpleAnime){
  new SimpleAnime();
}

/*
jQuery(document).ready(function( $ ){
	var uls = $('#menu ul');
	uls.hide();

	$('.header_menu > li').click(function( e ){
		e.stopPropagation();
		uls.hide();
		$( this ).find('ul').show();
	});
	$('.header_menu ul').click(function( e ){
		e.stopPropagation();
	});
	$('body').click(function(){
		uls.hide();
	});
}); */


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

if (closeNav() != null){
  document.getElementById("mySidenav").style.width = "0";
} 