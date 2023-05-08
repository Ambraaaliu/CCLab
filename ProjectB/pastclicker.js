const images=[
    "pastimg1.png","pastimg2.png","pastimg3.png","pastimg4.png",
    "pastimg5.png","pastimg6.png","pastimg7.png","pastimg8.png"
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
  
  
  
  
  
  
  
  
  
  
  
  