const first_scene = document.querySelector('.first_scene');
const my_company = document.querySelector('.my_company')

window.addEventListener('load', () =>{
    first_scene.classList.toggle('open');
    my_company.classList.toggle('open'); 

});

window.addEventListener("load", function(){
    const loader = document.querySelector('.loader');
    loader.className += " hidden";
});


/*const second_scene = document.querySelector('.second_left');
document.addEventListener('scroll', () => {
    second_scene.classList.toggle('open');
});
*/
