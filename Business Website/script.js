const menuItems = document.querySelectorAll('nav ul li')

menuItems.forEach((li) =>{
     li.addEventListener('Click', ()=>{
        removeActiveClass()
        li.classList.add('active')
    })
})

function removeActiveClass() {
    menuItems.forEach((li) => {
        li.classList.remove('active')
    })
}