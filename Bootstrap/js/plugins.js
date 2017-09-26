$(document).ready(function () 
{    
    $('.carousel').carousel(
    {
        interval: 6000
        
    });
    //show color Option Div when Click on the Gear
    $(".gear-check").click(function()
    {
       $(".color-box").fadeToggle(); 
    });
    //change theme color on click
    
    var colorLi = $(".color-box ul li");
    
    colorLi
        .eq(0).css("backgroundColor","#E41817").end()
        .eq(1).css("backgroundColor","#ff036c").end()
        .eq(2).css("backgroundColor","#337ab7").end()
        .eq(3).css("backgroundColor","#9c9c07");
        
    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"))
    });
    
    //caching The Scroll Top Element
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function()
    {   
        if ($(this).scrollTop()>=700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    });
    //click on button to scroll Top
        
        scrollButton.click(function()
        {
            $("html,body").animate({scrollTop :0},600);
        });
    
});
 //????????????????????????erroe
//loading screen
$(window).on('load', function () {
    $(".loading-overlay.spinner").fadeOut(2000,
   function()
    {
        $(this),parent().fadeOut(2000,
        function()
        {
            $("body").css("overflow","auto");
            
           $(this).remove(); 
        });
    });    
});
