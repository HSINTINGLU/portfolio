// 確保 DOM 完全載入後才執行腳本
document.addEventListener('DOMContentLoaded', () => {
    
    // 選取所有包含 href 屬性且以 '#' 開頭的連結（即錨點連結）
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // 為每個錨點連結加上點擊事件監聽器
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // 防止預設的瞬間跳轉行為
            e.preventDefault();

            // 取得目標區塊的 id (例如 '#about')
            const targetId = this.getAttribute('href');
            
            // 如果 href 只是 '#'，則不執行後續動作
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            // 如果目標元素存在，則使用平滑滾動至該元素
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});