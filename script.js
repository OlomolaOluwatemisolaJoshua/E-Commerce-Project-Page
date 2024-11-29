const thumbOne = document.getElementById('thumb1');
const thumbTwo = document.getElementById('thumb2');
const thumbThree = document.getElementById('thumb3');
const thumbFour = document.getElementById('thumb4');
const minus = document.getElementById('svg');
const plus = document.getElementById('sv');
const bigImg = document.getElementById('display');
const zero = document.getElementById('zero');

thumbOne.addEventListener('click', () => {
    bigImg.setAttribute('src', 'images/image-product-1.jpg')
})


thumbTwo.addEventListener('click', () => {
    bigImg.setAttribute('src', 'images/image-product-2.jpg')
})

thumbThree.addEventListener('click', () => {
    bigImg.setAttribute('src', 'images/image-product-3.jpg')
})

thumbFour.addEventListener('click', () => {
    bigImg.setAttribute('src', 'images/image-product-4.jpg',)
})

lastClickedImage = smallImage