function togleSidebar(){
    document.querySelector('.sidebar').classList.toggle('active')
    document.getElementsByTagName('main')[0].classList.toggle('bar-hidden')
}
if(window.innerWidth < 1291) togleSidebar()