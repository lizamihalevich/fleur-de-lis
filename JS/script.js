 $(".submenu").hide();
 $(".dropdown_med").hide();
 $(".submenu__3").hide();
 $(".prod_list").hide();
 $(".fas .fa-minus-square").hide();
 var newPrice = [];
 var price = document.querySelectorAll("h3 span.price_val");
  for (i=0; i < price.length; i++) {
  	newPrice.push((price[i].innerText/1.1628).toFixed(2));
  }
 var h3 = document.querySelectorAll(".list_flowers h3");
  
  $(".owl-carousel").owlCarousel({
  	loop:true,
  	items:4,
  	dots:false,
  	nav:true,
  	margin:20,
  	responsive:{
  		0: {
  			items: 1
  		},
  		598: {
  			items: 2
  		},
  		767: {
  			items: 3
  		},
  		1200: {
  			items: 4
  		},
  		1920: {
  			items: 6
  		}
  	}
  	});
  $(".products_").hover(function(){
  		$(".sub_products").stop(false,true).slideDown(300);
  	},function(){
  		$(".sub_products").stop(false,true).slideUp(200);
  });
  $(".blog_").hover(function(){
  		$(".sub_blog").stop(false,true).slideDown(300);
  	},function(){
  		$(".sub_blog").stop(false,true).slideUp(200);
  });
  $(".specials_").hover(function(){
  		$(".sub_specials").stop(false,true).slideDown(300);
  	},function(){
  		$(".sub_specials").stop(false,true).slideUp(200);
  });
  $(".submenu").hover(function(){
  		$(this).stop(false,true).fadeIn(0);
  	},function(){
  		$(this).stop(false,true).slideUp(200);
  });
  $(".select_money ul").hide();
  $(".select_money").on("click", function(){
  	$(".select_money i").toggleClass("rotation");
  	$(".select_money ul").toggle(200);
  });

  $(".select_money ul li").on("click", function(){
  	document.querySelector(".mng").firstChild.data = $(this).text();
  	if ($(this).text()==="EUR") {
  		for(i=0;i<price.length;i++){
  			h3[i].innerHTML = "&euro;" + newPrice[i];
  		} 
  	} else
  	if ($(this).text()==="USD") {
  		for(i=0;i<price.length;i++){
  			h3[i].innerHTML = "$" + price[i].innerText;
  		}
  	}
  });
 
 $(".left_menu_medium_wrap").on("click", function(){
 	$(".left_menu_medium_wrap .fas").toggle();
 	$(".dropdown_med").slideToggle(300);
 });

$(".prod_button").on("click", function(){
	$(".prod_button").toggle();
	$(".prod_list").slideToggle(200);
});

$(".prod_item").on("click", function(){
		$(this).children("i").toggle();
		$(this).children("ul").slideToggle(200);
});



