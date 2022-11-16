const frontPageName = document.querySelector('#name-color');
const jobTitle = document.querySelector('#title-color');


frontPageName.addEventListener('click', (evt) => {
    if(evt.target){
        evt.target.classList.add("animate__animated", "animate__rubberBand");
    }
    setTimeout(function(){evt.target.classList.remove("animate__rubberBand") }, 500);
})

jobTitle.addEventListener('click', (evt) => {
    if(evt.target){
        evt.target.classList.add("animate__animated", "animate__backInLeft");
    }
    setTimeout(function(){evt.target.classList.remove("animate__backInLeft") }, 1000);
})