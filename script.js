let slide = document.querySelectorAll('.slide-cont')
let index = 0;

function next(){
    slide[index].classList.remove('active')
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}

function prev(){
    slide[index].classList.remove('active')
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}

setInterval(next, 4000);
