$('#main').css('border','2px solid red')
$('#main').css('padding', '2rem')
$('.special').css('border','2px solid red')

// capturing events
/* $('a').click(function(){
    alert(jQuery(this).html())
}) */
$('a').click(function(){
    alert(this.innerHTML)
})

