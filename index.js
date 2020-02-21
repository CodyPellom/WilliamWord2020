$(function(){
  
    var menuButtonCounter = 0;
    $('#menu-button').click(function(){
    menuButtonCounter++;
    if (menuButtonCounter % 2 == 0){
        $('.navbar-container').css('height', '75px');
        $('.navbar-link-section').css('opacity','100%');
    } else {
        $('.navbar-container').css('height', '50px');
        $('.navbar-link-section').css('opacity','0%');

    }
    })


})

