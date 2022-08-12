
const myModal = document.getElementById("myModal");
const btn = document.getElementById("katt-btn");
const closeBtn = document.getElementById("close-btn");

btn.onclick = () => {
    myModal.style.display = "block";
}

closeBtn.onclick = () => {
    myModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}
