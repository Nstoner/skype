let hamburgerMenuTag = document.querySelector(".hamburgerMenuContainer");
let line1Tag = document.querySelector(".line1");
let line2Tag = document.querySelector(".line2");
let line3Tag = document.querySelector(".line3");
let overlayMenu = document.querySelector(".overlayMenu");


hamburgerMenuTag.onclick = () => {
    if (hamburgerMenuTag.classList.contains("isOpened")){
        line2Tag.classList.remove("line2hide"),
        line1Tag.classList.remove("line1rotate"),
        line3Tag.classList.remove("line3rotate"),
        overlayMenu.classList.remove("active"),
        hamburgerMenuTag.classList.remove("isOpened")
    }else {
        line2Tag.classList.add("line2hide"),
        line1Tag.classList.add("line1rotate"),
        line3Tag.classList.add("line3rotate"),
        overlayMenu.classList.add("active"),
        hamburgerMenuTag.classList.add("isOpened")
    }
    
};


