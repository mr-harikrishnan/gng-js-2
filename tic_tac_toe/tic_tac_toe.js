
var container = document.createElement("div")

var resultArray=[]

container.style.width = "305px"
container.style.height = "305px"
container.style.background = "grey"
container.style.display = "flex"
container.style.flexWrap = "wrap"

var currentTex="X"

for (let i = 0; i < 9; i++) {
    var box = document.createElement("div")
    box.style.width = "100px"
    box.style.height = "100px"
    box.style.background = "black"
    box.style.border = "1px solid white"
    box.style.color = "white"
    box.style.fontSize = "50px"
    box.style.display = "flex"
    box.style.justifyContent = "center"
    box.style.alignItems = "center"


    box.onclick = function () {
        if(this.innerText==""){
            if(currentTex=="X"){
            this.innerText="X"
            currentTex="O"
            resultArray[i]="X"
           
        }
        else{
            this.innerText="O"
            currentTex="X"
            resultArray[i]="O"
            
           
        }
    
        }
        
        
    }
    box.onmouseenter = function () {
        this.style.background = "grey"
    }
    box.onmouseleave = function () {
        this.style.background = "black"
    }
    container.appendChild(box)
  
    
}

document.body.appendChild(container)
console.log(resultArray[0])



// --------------------------------------------------------------------------------------------









