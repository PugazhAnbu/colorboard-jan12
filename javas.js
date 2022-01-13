const colors = ["#e74c3c",  '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const names = ["Pugazh", "Anbu"]
const container = document.getElementById("container")
const SQUARES = 500

for(let i=0;i<SQUARES;i++){
    const squar = document.createElement("div")
    squar.classList.add("square")

    squar.addEventListener("mouseover", ()=> setColor(squar))
    squar.addEventListener("mouseout", ()=>removecolor(squar))
    container.appendChild(squar)
}
function setColor(element){
    const color = randomColor()
    const name = randomName()
    element.style.background = color
    element.innerHTML = name

    element.style.boxShadow = `0 0 3px ${color}`

}

function removecolor(element){
    element.style.background = "#1d1d1d"
    
    element.style.boxShadow = " 0 0 3px #000"
    // element.style.textIndent = "50px";
     setTimeout(function(){
         element.innerHTML="";
         },900);
    
}


function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
function randomName(){
    const ind = Math.floor(Math.random()*names.length)
    return names[ind]
}

