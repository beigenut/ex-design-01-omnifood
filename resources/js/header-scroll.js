$(window).scroll(function() {
    
    if($(this).scrollTop() === 0)
        $('#header-fixed').css('background-color','transparent');
    
    if($(this).scrollTop() < 110 && $(this).scrollTop() !== 0)
        $('#header-fixed').css('background-color','rgba(135,0,0,0.2');
    
    else
        $('#header-fixed').css('background-color','rgba(135,0,0,0.2');
    
});
