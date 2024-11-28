// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website is ready!');
});
function openModal(src, caption) {
    var modal = document.getElementById("myModal");
    var modalImg = modal.querySelector(".modal-content");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = caption;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}