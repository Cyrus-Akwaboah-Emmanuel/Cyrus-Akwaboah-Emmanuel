var opennav = document.querySelector("#openbtn");
var closenav = document.querySelector("#closebtn");
var navlinks = document.querySelector("#navlinks");

opennav.addEventListener("click", () =>{
    navlinks.classList.add("show");
})
closenav.addEventListener("click", () =>{
    navlinks.classList.remove("show");
})

// intersection observer
var nav = document.getElementById("navbar");
var container = document.getElementById("headbg");

var options = {
    root: null,
    threshold: 0,
    rootMargin: "-170px"
}

var observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        // console.log(entry.target);
        if(!entry.isIntersecting){
            // nav.style.width = "100%";
            nav.style.backgroundColor = "#1a1c20";
            logo.style.color = "white";
            nav.style.padding = "2em";
            nav.style.color = "box-shadow: 0px 10px 20px rgba(0,0,0,0.6)";
        } else{
            nav.style.width = "100%";
            nav.style.backgroundColor = "unset";
            logo.style.color = "red";
            nav.style.padding = "2em";
            nav.style.color = "none";
        }
    });
}, options);

observer.observe(container);