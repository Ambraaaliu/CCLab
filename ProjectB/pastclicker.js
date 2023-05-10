const images=[
    "PastImg1.png","PastImg9.png","PastImg3.png","PastImg10.png",
    "PastImg2.png", "PastImg11.png", "PastImg4.png", "PastImg12.png",
    "PastImg5.png","PastImg13.png","PastImg6.png","PastImg14.png",
    "PastImg7.png","PastImg15.png","PastImg8.png","PastImg16.png"
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
  
  
  
  
  
  
  
  
  
  
  
  