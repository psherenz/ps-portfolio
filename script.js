function initClock() {
    const clockElement = document.getElementById('live-clock');
    
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        clockElement.textContent = `${hours}:${minutes}:${seconds} // UTC+8`;
    }
    
    setInterval(updateTime, 1000);
    updateTime();
}

document.addEventListener('DOMContentLoaded', initClock);