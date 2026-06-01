let img = document.querySelector("#RobloxSlika");

let btn1 = document.querySelector("#b1");
let btn2 = document.querySelector("#b2");

let imgIndex = 1;
let imgCount = 17;

let timeout = setInterval(() => {
  pictureChange();
}, 5000);

function pictureChange(){
    imgIndex++;
    if(imgIndex > imgCount)
        imgIndex = 1

    img.src = "Slike/SetoviImgsStvar/" + imgIndex + ".png";
}

btn1.addEventListener("click", () => {
  imgIndex--;
  if (imgIndex < 1) imgIndex = imgCount;
  img.src ="Slike/SetoviImgsStvar/" + imgIndex + ".png";
});

btn2.addEventListener("click", () => {
  imgIndex++;
  if (imgIndex > imgCount) imgIndex = 1;
  img.src ="Slike/SetoviImgsStvar/" + imgIndex + ".png";
});