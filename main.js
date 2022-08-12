
const myModal = document.querySelector(".modal");
const btn = document.querySelector(".katt");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
    myModal.classList.add("fadeIn");
    setTimeout(() => {
        myModal.style.visibility="visible";
    }, 500);
    document.getElementById("myModal").focus();
});

closeBtn.addEventListener("click", () => {
    myModal.classList.add("fadeOut");
    setTimeout (() => {
        myModal.style.visibility = "hidden"; 
    }, 500);
})
    
window.onclick = (event) => { 
    if(event.target == myModal) {
        myModal.style.display = "none"; } 
    }






