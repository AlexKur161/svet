import Hamburger from "/assets/js/hamburger.js";
window.addEventListener('DOMContentLoaded', () => {
    const showMenu = new Hamburger('.nav_wrap','.open_wrap_btn','.btn_close')
    showMenu.show()
    showMenu.close()
})
