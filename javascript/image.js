
let playOnce = true;

window.addEventListener("scroll", () => {

    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    // console.log(scrollValue);
    // Image
    if (scrollValue > 0.45) {
        imgServices.style.opacity = 1;
        imgServices.style.transform = "none";
    }
});