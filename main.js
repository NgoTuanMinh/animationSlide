var selectElement = document.querySelector('.type_of_animation');
var btnRightElement = document.querySelector('.wrap__btn-right'),
    btnLeftElement = document.querySelector('.wrap__btn-left');
var currentElement;
var slideElement = document.getElementsByClassName('wrap__slide-item'),
    firstSlideElement = slideElement[0];
    endSlideElement = slideElement[slideElement.length - 1];
var typeAnimation = 'press-away';

selectElement.onchange = function() {
    typeAnimation = selectElement.value;
    
}
console.log(typeAnimation);
btnLeftElement.onclick = function() {
    currentElement = document.querySelector('.wrap__slide-item.slide-active');
    currentElement.classList.add(`hidden-by-previous-by-${typeAnimation}`);
    currentElement.addEventListener('webkitAnimationEnd', function() {
        currentElement.classList.remove('slide-active');
        currentElement.classList.remove(`hidden-by-previous-by-${typeAnimation}`);
    })
    
    if (currentElement == firstSlideElement) {
        endSlideElement.classList.add('slide-active');
        endSlideElement.classList.add(`show-by-previous-by-${typeAnimation}`);
        endSlideElement.addEventListener('webkitAnimationEnd', function() {
            endSlideElement.classList.remove(`show-by-previous-by-${typeAnimation}`);
        })
    }
    else {
        currentElement.previousElementSibling.classList.add('slide-active');
        currentElement.previousElementSibling.classList.add(`show-by-previous-by-${typeAnimation}`);
        currentElement.previousElementSibling.addEventListener('webkitAnimationEnd', function() {
            if (currentElement.previousElementSibling == null) { return false};
            currentElement.previousElementSibling.classList.remove(`show-by-previous-by-${typeAnimation}`);
        })
    }
}

btnRightElement.onclick = function() {
    currentElement = document.querySelector('.wrap__slide-item.slide-active');
    currentElement.classList.add(`hidden-by-next-by-${typeAnimation}`);
    currentElement.addEventListener('webkitAnimationEnd', function() {
        currentElement.classList.remove('slide-active');
        currentElement.classList.remove(`hidden-by-next-by-${typeAnimation}`);
    })
    
    if (currentElement == endSlideElement) {
        firstSlideElement.classList.add('slide-active');
        firstSlideElement.classList.add(`show-by-next-by-${typeAnimation}`);
        firstSlideElement.addEventListener('webkitAnimationEnd', function() {
            firstSlideElement.classList.remove(`show-by-next-by-${typeAnimation}`);
        })
    }
    else {
        currentElement.nextElementSibling.classList.add('slide-active');
        currentElement.nextElementSibling.classList.add(`show-by-next-by-${typeAnimation}`);
        currentElement.nextElementSibling.addEventListener('webkitAnimationEnd', function() {
        if (currentElement.nextElementSibling == null) { return false};
            currentElement.nextElementSibling.classList.remove(`show-by-next-by-${typeAnimation}`);
        })
    }
    
}
