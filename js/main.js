const openmodal = document.getElementById("open-model")
const mymodal = document.getElementById("my-modal")
const modalclose = document.getElementById("modal-close")

openmodal.addEventListener("click", opemModel)
modalclose.addEventListener("click", closeModal)

function opemModel(){
    mymodal.classList.add("open")
}

function closeModal(){
    mymodal.classList.remove("open")
}