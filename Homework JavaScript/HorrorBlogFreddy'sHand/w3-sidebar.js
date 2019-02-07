//Function to create a NavBar dynamically in JS
function createNavBar() {
    var $div = $('<div>').appendTo('body');
    $div.attr('id', 'mySidebar');
    $div.addClass('w3-sidebar', 'w3-bar-block', 'w3-white', 'w3-animate-left');
    $div.css({
        'display': 'none',
        'z-index': '4'
    });

    $('<button>').addClass('w3-bar-item', 'w3-button').html('close').click(w3_close).appendTo(mySidebar);
    $('<a href="#" class="w3-bar-item w3-button">About Me</a>').appendTo(mySidebar);
    $('<a href="#" class="w3-bar-item w3-button">Social Media Links</a>').appendTo(mySidebar);
    $('<a href="#" class="w3-bar-item w3-button">Suggested Pages</a>').appendTo(mySidebar);
}

//Function to create overlay
function createOverlay() {
    var $overlay = $('<div>').appendTo('body');
    $overlay.addClass('w3-overlay').click(w3_close);
    $overlay.attr('id', 'myOverlay');
    $overlay.css({
        'cursor': 'pointer',
    });
}


//Function to create Nav 'Burger button
function createNavButton() {
    var $navBtn = $('<button>').click(w3_open).html('&#9776;').appendTo('body');
    $navBtn.addClass('w3-button', 'w3-white', 'w3-xxlarge');
}




//JS to open and close sidebar with overlay effect

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function renderNavbar() {
    createNavBar();
    createOverlay();
    createNavButton();

};

$(document).ready(function () {
    renderNavbar();
})