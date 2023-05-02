/* $('#hidebox').click(function(){
    $('#box').hide('normal') // the 'normal' or a value '200'ms that we passed in will add a transition
})

$('#showbox').click(function(){
    $('#box').show(200)
})
$('#togglebox').click(function(){
    $('#box').toggle(500,function(){
        alert('done')
    })
}) */

/* EXAMPLE 2 */
/* $('#slideupbox').click(function(){
    $('#box').slideUp('slow')
})
$('#slidedownbox').click(function(){
    $('#box').slideDown('slow')
})
$('#slidetogglebox').click(function(){
    $('#box').slideToggle('slow')
}) */

/* EXAMPLE 3 */
/* $('#fadeoutbox').click(function(){
    $('#box').fadeOut('3000')
})

$('#fadeinbox').click(function(){
    $('#box').fadeIn('3000')
})

$('#fadeto20box').click(function(){
    $('#box').fadeTo(3000,0.2 )
})

$('#fadeto100box').click(function(){
    $('#box').fadeTo(3000,1 )
}) */

$('#growbox').click(function(){
    $('#box').animate({width: '750px'}) //This is actually self explanatory
})
$('#growtext').click(function(){
    $('#box').animate({fontSize: '32px'},1000)
})
$('#movebox').click(function(){
    $('#box').animate({left: '100px'})
})
$('#doall').click(function(){
    $('#box').animate({width: '750px', fontSize: '32px', left: '100px'}, 3000)
})
$('#sequence').click(function(){
    $('#box').animate({width: '750px'},3000, function(){
        $('#box').animate({fontSize: '32px'},1000, function(){
            $('#box').animate({left: '100px'},1500)
        })
    })
})