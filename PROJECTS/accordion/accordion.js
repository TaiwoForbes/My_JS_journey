const accordion = document.querySelectorAll('.content-container')

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){

        /* This removes the class 'active' from content-container  if another question is open */
        accordion.forEach(function(item){
            if(item !== accordion){
                item.classList.remove('active')
            }
            console.log(item)
        })

        /* This just toggle this class active btw */
        this.classList.toggle('active')
    })
}
