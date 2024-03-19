var array = ["Ambience1.jpg" ,"Group.jpg", "Ambience2.jpg", "Burger.jpg", "Food_New.jpg", "Chinese.jpg", "Ambience.jpg"];

const images = document.querySelector(".images");
const button = document.querySelectorAll(".image_button")
var i = -1;
changeSlides();

function changeSlides(){
    button.forEach((btn) => {
        btn.addEventListener("click", function(){
            if(btn.classList.contains("left")){
                i = i-1;
                if(i<0){
                    i = 6;
                }
                images.style.backgroundImage = `url(${array[i]})`;
                }
            else{
                i = i+1;
                if(i>6){
                    i = 0;
                }
                images.style.backgroundImage = `url(${array[i]})`;
            }
        });
    });
    i = i+1;
    if(i>6){
    i = 0;
    }
    images.style.backgroundImage = `url(${array[i]})`;
    setTimeout(changeSlides,8000);
};