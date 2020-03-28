let menuBtn = document.querySelector('.mobile-menu-btn'),
    closeBtn = document.querySelector('.close-menu-btn'),
    menuList = document.querySelector('.mobile-menu-list');

menuBtn.addEventListener('click', function() {
    menuList.style.width = "100%";
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', function() {
    menuList.style.width = "0";
    document.body.style.overflow = "visible";
})

function carrousel(carrouselItems, carrouselItem, btnP, btnN, imgP, imgN) {
        const	carrouselElt 	= document.querySelector(carrouselItems),
                images		= document.querySelectorAll(carrouselItem),
                btnPrev 	= document.querySelector(btnP),
                btnNext         = document.querySelector(btnN),
                imgPrev         = document.querySelector(imgP),
                imgNext         = document.querySelector(imgN);

        let counter = 0;

        btnPrev.addEventListener('click', function () {

        carrouselElt.style.transition = "transform .5s ease-in-out";
        counter--;
        carrouselElt.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
        });

        btnNext.addEventListener('click', function () {

        carrouselElt.style.transition = "transform .5s ease-in-out";
        counter++;
        carrouselElt.style.transform = "translateX(" + -(images[0].clientWidth * counter) + "px)";
        });

        carrouselElt.addEventListener('transitionend', function() {

        if (counter <= 0) {

        btnPrev.disabled = true;
        imgPrev.src = "img/small-arrow-left.png";

        } else {

        btnPrev.disabled = false;
        imgPrev.src = "img/big-arrow-left.png";
        
        }

        if (counter >= images.length - 1) {

        btnNext.disabled = true;
        imgNext.src = "img/small-arrow-right.png";

        } else {

        btnNext.disabled = false;
        imgNext.src = "img/big-arrow-right.png";
        }
        });       
}

carrousel('.carrousel-items', '.carrousel-item', '#prev', '#next', '#img-prev', '#img-next');
carrousel('.our-news-items', '.our-news-item', '#p', '#n', '#img-p', '#img-n');