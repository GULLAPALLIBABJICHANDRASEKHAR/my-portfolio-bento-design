function sideBarDisplay() {
    const sideBarContainer = document.querySelector(".sidebar");
    const hamburgerBtn = document.querySelector(".hamburger");
    const hamburger_lines = document.querySelectorAll(".line");
    const mainContainer = document.querySelector(".bento-container");
    console.log(mainContainer);
    
    hamburgerBtn.addEventListener("click", ()=> {
        const sideBarClasses = sideBarContainer.classList;
        if (sideBarClasses.contains("show-sidebar")) {
            for(i=0; i<hamburger_lines.length; i++) {
                hamburger_lines[i].classList.remove("line-clicked");
            }
            sideBarContainer.classList.remove("show-sidebar");
            mainContainer.classList.remove("bento-container-move");
            mainContainer.classList.add("bento-container");
        }
        else {
            for(i=0; i<hamburger_lines.length; i++) {
                hamburger_lines[i].classList.add("line-clicked");
            }
            sideBarContainer.classList.add("show-sidebar");
            mainContainer.classList.remove("bento-container");
            mainContainer.classList.add("bento-container-move");
        }
    });
}
sideBarDisplay();