
const myModal = document.querySelector(".modal");
const btn = document.querySelector(".katt");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
    myModal.style.visibility="visible";
});

closeBtn.addEventListener("click", () => {
    myModal.style.visibility ="hidden";
});

