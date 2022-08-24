//init swiper
const swiper = new Swiper('.section-disciplines__content-left', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

  // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    paginationClickable: true,
    },

  // Navigation arrows
    navigation: {
    nextEl: '.section-disciplines-prev',
    prevEl: '.section-disciplines-next',
    },

  // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    }
});

/* Смена текста в блоке рядом с каруселью*/

document.onclick = function(e){
    if(e.target.tagName == 'A'){
        if(e.target.id == 'a1'){
            document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' A new undergraduate Interior Design program is described, in order to demonstrate an approach to integrating theory and practice.';
        }
        if(e.target.id == 'a2'){
            document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' Art history is the historical discipline that deals largely, but not exclusively, with material objects';
        }
        if(e.target.id == 'a3'){
            document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' Discipline giving a complete vision of the architecture of all eras, beginning the epoch of the Egyptian pyramids, ending EXPO2022';
        }
        if(e.target.id == 'a4'){
            document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' This course provides an opportunity for students to study life drawing. ';
        }
        if(e.target.id == 'a5'){
            document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' As for the progression of the curriculum itself, a web design degree will follow the typical scholarly structure of required foundational courses opening up into advanced courses with more freedom in course choice as international students progress. ';
        }
    }else
    document.querySelector('#output').textContent = '';
}
