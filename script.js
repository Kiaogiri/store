document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is ready!");

    let batalButton = document.querySelector(".cancel-button");
    if (batalButton) {
        batalButton.addEventListener("click", function() {
            window.location.href = "beranda.html"; // Pastikan beranda.html ada di repositori
        });
    }
});
