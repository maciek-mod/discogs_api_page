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

export function deleteLinkFromText(text){
    let returnString = text;
    if(text.indexOf("[a=") || text.indexOf("[l=")){
        returnString = returnString.replace(/(\[a=)|(\[l=)|(\])/g, "");
        return returnString;
    }
    return returnString;
}