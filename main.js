window.onload = () => {
    window.scrollTo(0,0)
}
let toptop = document.getElementById("top")
let navbar = document.getElementById("header");
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.style.transition = ".5s";
        navbar.style.backgroundColor = "#258";
        toptop.style.display = "block";
    } else {
        navbar.style.backgroundColor = "transparent";
        toptop.style.display = "none";
    }
} 

toptop.onclick = ()=> {
    scrollTo(0, 0);
    behavior = "smooth";
}
