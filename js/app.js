function sideBarDisplay() {
    const sideBarContainer = document.querySelector(".sidebar");
    const hamburgerBtn = document.querySelector(".hamburger");
    const hamburger_lines = document.querySelectorAll(".line");
    hamburgerBtn.addEventListener("click", ()=> {
        const sideBarClasses = sideBarContainer.classList;
        if (sideBarClasses.contains("show-sidebar")) {
            for(i=0; i<hamburger_lines.length; i++) {
                hamburger_lines[i].classList.remove("line-clicked");
            }
            sideBarContainer.classList.remove("show-sidebar");
        }
        else {
            for(i=0; i<hamburger_lines.length; i++) {
                hamburger_lines[i].classList.add("line-clicked");
            }
            sideBarContainer.classList.add("show-sidebar");
        }
    });
}
sideBarDisplay();