function SendMail(){
    var params={
        from_name: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_q859mtc" , "template_iiv6y5m" , params).then(function(res){
        alert("Succes! " + res.status);
    })
}


 let currentIndex = 0;
    
function showSlide(index) {
    const slides = document.querySelector('.slider-wrapper');
    const totalSlides = document.querySelectorAll('.slider-item').length;
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
    }
    
function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
    }
    
            
    setInterval(nextSlide, 5000);



   