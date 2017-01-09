$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
   
    
var firstAnimation = function () {
    $('.first').fadeIn(2000);
};

var secondAnimation = function () {
    $('.second').fadeIn(2000);
};

var thirdAnimation = function () {
    $('.third').fadeIn(2000);
};   

  
if(windowWidth<=549){
    if(windowScrollTop>400){
  		firstAnimation();
  	}
    if(windowScrollTop>950){
       secondAnimation();
    }
    if(windowScrollTop>1900){
      thirdAnimation();
    }
}else if(windowWidth>549 && windowWidth<=991){
    if(windowScrollTop>480){
  		firstAnimation();
  	}
    if(windowScrollTop>750){
       secondAnimation();
    }
    if(windowScrollTop>1400){
       thirdAnimation();
    }  
}else{
     if(windowScrollTop>450){
  		firstAnimation();
  	}
    if(windowScrollTop>650){
       secondAnimation();
    }
    if(windowScrollTop>1100){
       thirdAnimation();
    }
  }
});