let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // 3秒ごとにスライドを切り替える
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function MenuClick() {
    $(".openbtn1").toggleClass('active');
    $(".menuitem").toggleClass('hidden');
    $(".menuitem").toggleClass('action');
}