function menu() {
    let menu = document.querySelectorAll('li.menu')
    document.querySelector("img#icone").style.transform = "translate( 30%, -356%)";


    for (let index = 0; index < menu.length; index++) {
        menu[index].style.display = "block"
        
    }


}