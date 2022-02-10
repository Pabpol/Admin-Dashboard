let list = document.querySelectorAll('.navigation li');
let toggleNav = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');


toggleNav.addEventListener('click', () => {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
});

function activeItem(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeItem));







