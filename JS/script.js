function openMenu() {
    document.getElementById("menu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
}


document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!menu.contains(event.target) && event.target !== menuBtn && !menuBtn.contains(event.target)) {
        closeMenu();
    }
});
