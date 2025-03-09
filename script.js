document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is ready!");

    function goToBeranda() {
        window.location.href = "beranda.html"; 
    }

    let batalButton = document.querySelector(".cancel-button");
    if (batalButton) {
        batalButton.addEventListener("click", goToBeranda);
    }
});
