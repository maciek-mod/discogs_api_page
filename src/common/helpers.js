import * as constans from './constans';

export default function stickyMenu(){
    let height = window.scrollY;
    let menu = document.querySelector("header");
    if (height > constans.startFixMenu) {
        menu.classList.add('slide');
    } else {
        menu.classList.remove('slide');
    }
}