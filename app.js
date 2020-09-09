 const btnSlide = document.querySelectorAll('button');
const article = document.querySelectorAll('article');
const imageUser = document.querySelectorAll('.image-user')
 let slide = 1
 sliders(slide)
function slider(ss){
    sliders(slide += ss)
}

function sliders(n){
    if (n > article.length) {slide = 1}    
    if (n < 1) {slide = article.length}
    for(let i = 0; i < article.length; i++){
        article[i].style.display = 'none'
    }
    for(let i = 0; i < imageUser.length; i++){
        imageUser[i].style.display = 'none'
    }
    article[slide-1].style.display = 'block'
    imageUser[slide-1].style.display = 'block'
}
