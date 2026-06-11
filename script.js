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

// --- 自訂滑鼠游標監聽 ---
const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

if (dot && outline) {
    // 更新游標位置
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // 核心點直接跟隨，不延遲
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // 外圈跟隨
        outline.style.left = `${posX}px`;
        outline.style.top = `${posY}px`;
    });

    // 偵測所有可點擊元素，觸發放大效果
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
        e.preventDefault(); // 阻止 <a> 標籤的預設跳轉或重新整理行為
        
        const emailText = emailBtn.querySelector('.about-email-text').innerText;
        //if (!emailTarget) return;
        
        //const emailText = emailTarget.innerText.trim();
        
        // 呼叫瀏覽器剪貼簿 API
        navigator.clipboard.writeText(emailText).then(() => {
            // 顯示 [ COPIED! ]
            copyToast.classList.add('active');
            
            // 2 秒後自動隱藏
            setTimeout(() => {
                copyToast.classList.remove('active');
            }, 2000);
        }).catch(err => {
            console.error('無法複製文字: ', err);
        });
    });
}