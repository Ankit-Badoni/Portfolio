document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                event.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust if navbar overlaps
                    behavior: "smooth"
                });
            }
        });
    });
});
