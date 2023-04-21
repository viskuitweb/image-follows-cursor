const image = document.getElementById("image")
const screenWidth = window.screen.width
const screenHeight = window.screen.height



window.addEventListener("mousemove", (event) => {
      
      var x = screenWidth/2-event.clientX;
      var y = screenHeight/2-event.clientY;

     

      let xDeg=((x/screenWidth*100)*30/100)
      let yDeg=((-y/screenHeight*100)*30/100)
    image.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg}deg)`;
    image.style.boxShadow =`${xDeg/2}px ${-yDeg/2}px 15px black`;
        
    });