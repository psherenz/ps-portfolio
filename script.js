window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const topButton = document.getElementById("back-to-top");
    if (!topButton) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.opacity = "0.5";
        topButton.style.visibility = "visible";
    } else {
        topButton.style.opacity = "0";
        topButton.style.visibility = "hidden";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}