const inputs = document.querySelectorAll(".control-container input")
const Box=document.getElementById("previewBox")
const codeDisplay= document.getElementById("codePreview")
let properties= {
    shiftRight: "0px",
    shiftDown: "0px",
    spread: "0px",
    blur: "25px",
    opacity: "FF",
    color: "#000000",
    prevColor:"#000000"
}


function handleUpdate(){
    const suffix= this.dataset.sizing || ""
    
    if (this.name== "shiftRight"){
        properties.shiftRight= this.value + suffix
    }else if(this.name== "shiftDown"){
        properties.shiftDown= this.value + suffix
    }else if(this.name== "spread"){
        properties.spread= this.value + suffix
    }else if(this.name== "blur"){
        properties.blur= this.value + suffix
    }else if(this.name== "opacity"){
        let opacity = Math.round(Math.min(Math.max(this.value || 1, 0), 1) * 255);
        properties.opacity= opacity.toString(16)
        properties.color= properties.prevColor + properties.opacity
        
    }else if(this.name== "color"){   
        properties.prevColor= this.value
        properties.color=this.value + properties.opacity
    }
    Box.style.boxShadow = `${properties.shiftRight} ${properties.shiftDown} ${properties.blur} ${properties.spread} ${properties.color}`
    
    codeDisplay.innerHTML = `<p>-webkit-box-shadow: ${properties.shiftRight} ${properties.shiftDown} ${properties.blur} ${properties.spread} ${properties.color};</p>
     <p>box-shadow: ${properties.shiftRight} ${properties.shiftDown} ${properties.blur} ${properties.spread} ${properties.color};</p>`
}


inputs.forEach(input =>input.addEventListener("change",handleUpdate))
inputs.forEach(input =>input.addEventListener("mousemove",handleUpdate))