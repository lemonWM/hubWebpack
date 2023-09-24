import "./module.css";

const loadMenu = ()=> {

    if($('.main-menu__wrapper--menu').length){

        setTimeout(() => {
            
            $('.main-menu__wrapper--menu').addClass('init-load--active')

        }, 100);
    }
}

loadMenu()