document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetTab = link.getAttribute("data-tab");

            tabContents.forEach(content => {
                content.classList.remove("active");
            });

            tabLinks.forEach(link => {
                link.classList.remove("active");
            });

            document.getElementById(targetTab).classList.add("active");
            link.classList.add("active");
        });
    });
});
