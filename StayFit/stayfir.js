burger=document.querySelector('.burger')
navlist= document.querySelector('.navlist')
burger.addEventListener('click',()=>{
    navlist.classList.add('h-nav');
    console.log("clicked");

})
