const icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }
}

// const loder = document.getElementById("preloder");
//     window.addEventListener("load",function(){
//     loder.style.display = "none";
// })