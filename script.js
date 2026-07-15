// Google Maps button

document.getElementById("mapBtn").addEventListener("click", () => {
    window.open(
        "https://maps.google.com",
        "_blank"
    );
});

// Navbar shadow while scrolling

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";
    }
    else{
        nav.style.boxShadow="0 2px 8px rgba(0,0,0,.1)";
    }

});