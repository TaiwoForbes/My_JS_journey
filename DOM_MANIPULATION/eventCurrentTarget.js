const btns = document.querySelectorAll('.btn')


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        /* e.currentTarget.classList.add('green') */
        e.target.classList.add('green')
    })
})