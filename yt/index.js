var shows = document.querySelectorAll(".show");
var hides = document.querySelectorAll(".hide");

for(let i=0;i<shows.length;i++){
    shows[i].addEventListener("click", function(){
        if(hides[i].style.display == "flex")
            hides[i].style.display = "none";
        else
            hides[i].style.display = "flex";
    })
    // shows[i].document.querySelectorAll(".hide")[i].sty
}

// document.querySelectorAll(".show").addEventListener("click",function(){
//     if(document.querySelectorAll(".hide").style.display == "flex")
//     document.querySelectorAll(".hide").style.display = "none";
//     else
//     document.querySelectorAll("hide").style.display = "flex";
// })

// document.getElementById("khul").addEventListener("click",function(){
//     if(document.getElementById("ja").style.display == "flex")
//     document.getElementById("ja").style.display = "none";
//     else
//     document.getElementById("ja").style.display = "flex";
// })