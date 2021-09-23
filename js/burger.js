const burger =document.querySelector('.humburger-menu'),
menuElement =document.querySelector('.menu'),
menuList = document.querySelector('.menu-list');

const toggleMenu = ()=>{
    burger.classList.toggle('humburger-menu-active');
    menuElement.classList.toggle('menu-active');

    menuList.addEventListener('click',(event)=>{

        if(event.target.classList.contains('menu-list__link')){
            burger.classList.remove('humburger-menu-active');
            menuElement.classList.remove('menu-active');
        };
        
    });
};

burger.addEventListener('click',()=>toggleMenu());