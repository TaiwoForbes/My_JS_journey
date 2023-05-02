/* $('#tabs ul > li > a').click(function(){
    $('#tabs ul > li > a').css({background:'#a2a2a2', color:'#cecece'})
    $(this).css({background:'#eaeaea', color:'#333'})

    const thisTab =  $(this).attr('href')
    $('#tabs > div:visible').fadeOut(200,function(){
        $(thisTab).fadeIn(200)
    })
})
 */



/* USING PLAIN JAVASCRIPT */
const tabs = document.querySelectorAll('#tabs > ul > li > a')

tabs.forEach(function(item){
    item.addEventListener('click',selectedTab)
})

function selectedTab(e){
    e.preventDefault()

    tabs.forEach(function(item){
        item.removeAttribute('class')
    })

    e.target.className = 'active'

    const thisTab = e.target.getAttribute('href')
    const thisContent = document.querySelector(thisTab)
    const oldContent = document.querySelector('.visible')
    oldContent.className = 'visuallyhidden'

    oldContent.addEventListener('transitionend',function(){
        oldContent.className = 'hidden'
        thisContent.className = 'visible visuallyhidden'

        setTimeout(function(){
            thisContent.classList.remove('visuallyhidden')
        },30)
    },{capture:false, once:true,passive:false})
    
    
}