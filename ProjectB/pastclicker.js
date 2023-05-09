const images=[
    "pastImg1.png","pastImg2.png","pastImg3.png","pastImg4.png",
    "pastImg5.png","pastImg6.png","pastImg7.png","pastImg8.png"
]

let i = 0

function placeImage(x, y) {
    const nextSrc = images[i]


      const img = document.createElement("img")
      img.setAttribute("src", nextSrc)
      img.setAttribute("draggable", "false")
      
      img.style.left = x + "px"
      img.style.top = y + "px"
      img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"
      img.style.zIndex = "1";
      
      document.body.appendChild(img)
      
      i = i + 1
      if (i >= images.length) {
        i = 0
      }
    
  }
  
  document.addEventListener("click", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
  })
  
  document.addEventListener("touchend", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
  })
  
  
  
  
  
  
  
  
  
  
  
  