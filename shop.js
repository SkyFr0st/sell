document.addEventListener("DOMContentLoaded" , function(event){
    let galleryImages = document.querySelectorAll('.product-gallery img');
    let currentImageIndex = 0;

    setInterval(() => {
        
    galleryImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    
    galleryImages[currentImageIndex].classList.add('active');
    }, 3000); // เปลี่ยนภาพทุก3 วินาที

    let addToCartButton = document.getElementById('add-to-cart');

    addToCartButton.addEventListener('click' ,function(){
        alert('สินค้าได้ถูกเพิ่มลงในรถเข็นของคุณ');
    });
});