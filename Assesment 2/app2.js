$(".readmore-btn").on('click', function(){ // this is for the button to work 
    $(this).parent().toggleClass("showContent")

    var relaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
    $(this).text(relaceText);
})