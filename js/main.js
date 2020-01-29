console.log("Start of script.");

function dropdown() {
    var menu = document.getElementsByClassName('header')[0];
    
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}