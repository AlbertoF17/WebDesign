const navbarMenu = document.getElementById("menu");
const menuDropdowns = document.querySelectorAll(".menu-dropdown");

const closeAllSubmenus = () => {
    menuDropdowns.forEach((menuDropdown) => {
        const submenu = menuDropdown.querySelector(".submenu");
        const icon = menuDropdown.querySelector(".bx");
        if (submenu && submenu.classList.contains("active")) {
            submenu.classList.remove("active");
            icon.style.transform = "rotate(0deg)";
        }
    });
};

const toggleSubMenu = (event) => {
    if (event.target.classList.contains("menu-link") || event.target.classList.contains("bx")) {
        const parent = event.target.parentElement;
        const submenu = parent.querySelector(".submenu");
        const icon = parent.querySelector(".bx");
        if (submenu) {
            const leftPosition = parent.offsetLeft;
            if (submenu.classList.contains("active")) {
                submenu.classList.remove("active");
                icon.style.transform = "rotate(0deg)";
            } else {
                closeAllSubmenus();
                submenu.style.left = `${leftPosition}px`;
                submenu.classList.add("active");
                icon.style.transform = "rotate(180deg)";
            }
        }
    }
};

const handleClick = (event) => {
    if (!navbarMenu.contains(event.target)) {
        closeAllSubmenus();
    }
};

document.addEventListener("click", handleClick);
navbarMenu.addEventListener("click", toggleSubMenu);