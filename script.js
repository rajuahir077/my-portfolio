document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-links a");

    socialLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        link.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
