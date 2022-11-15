const frontPageName = document.querySelector('#name-color');
const jobTitle = document.querySelector('#title-color');


frontPageName.addEventListener('click', (evt) => {
    if(evt.target){
        evt.target.classList.add("animate__animated", "animate__rubberBand", "animate__repeat-1");
    }
    // if(evt.target.classList = ("animate__animated", "animate__rubberBand")){
    //     evt.target.classList.remove("animate__animated", "animate__rubberBand");
    // }
})

frontPageName.addEventListener('pointer', (evt) => {
    evt.target;
})