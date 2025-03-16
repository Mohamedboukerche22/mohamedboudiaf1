document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerText = 'عودة إلى الأعلى';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '10px';
    scrollToTopBtn.style.right = '10px';
    scrollToTopBtn.style.display = 'none'; // Initially hidden
    document.body.appendChild(scrollToTopBtn);

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
});