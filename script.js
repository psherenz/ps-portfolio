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

const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.style.left = `${posX}px`;
        outline.style.top = `${posY}px`;
    });

    const hoverElements = document.querySelectorAll('a, button, .article-card-link');
    hoverElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            outline.classList.add('cursor-hover');
        });
        elem.addEventListener('mouseleave', () => {
            outline.classList.remove('cursor-hover');
        });
    });
}

const emailBtn = document.getElementById('about-copy-email-btn');
const copyToast = document.getElementById('about-copy-toast');

if (emailBtn && copyToast) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const emailText = emailBtn.querySelector('.about-email-text').innerText;
        
        navigator.clipboard.writeText(emailText).then(() => {
            copyToast.classList.add('active');
            
            setTimeout(() => {
                copyToast.classList.remove('active');
            }, 2000);
        }).catch(err => {
            console.error('Error: ', err);
        });
    });
}