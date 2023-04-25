const images = document.getElementsByClassName("image")
const imagesArray = Array.from(images) //Cool fuction to transform a HTMLCollection to Array


const mousePosition = {x:0,y:0}

let userScroll = 0;

window.addEventListener("scroll", (event) => {

  const currentScroll = window.pageYOffset
  const scrollDifference = currentScroll - userScroll

if (scrollDifference>0) {
  mousePosition.y += scrollDifference
  console.log(mousePosition)
}

if (scrollDifference<0) {
  mousePosition.y += scrollDifference
  console.log(mousePosition)
}
moveImages(currentScroll)

userScroll = currentScroll;
} )

window.addEventListener("mousemove", (event) => {

  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;

  moveImages(userScroll)

})

function moveImages (scroll) {
  imagesArray.forEach(image=>{
  
    const imageWidth = image.width
    const imageHeight = image.height

    const imagePositionX = image.offsetLeft + imageWidth/2
    const imagePositionY = (image.offsetTop + imageHeight/2)-scroll
        
    let x = mousePosition.x-imagePositionX;
    let y = mousePosition.y-imagePositionY;

    let xDeg=((-x/imageWidth)*8)
    let yDeg=((y/imageHeight)*8)

    if (xDeg>15) {xDeg=15}
    if (xDeg<-15) {xDeg=-15}
    if (yDeg>15) {yDeg=15}
    if (yDeg<-15) {yDeg=-15}
    

        

    if ( (x<(imageWidth/2) && x>(-imageWidth/2)) && (y<(imageHeight/2) && y>(-imageHeight/2))) {
      image.style.transform = `rotateX(0deg) rotateY(0deg)`;
      image.style.boxShadow =`0px 0px 10px black`;

    } else {
      image.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg}deg)`;
      image.style.boxShadow =`${xDeg/2}px ${-yDeg/2}px 15px black`;
    }
      
    
          
      });
    };