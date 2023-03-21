const colorPicker = document.getElementById("colorPicker")
const color = document.body

colorPicker.addEventListener("change", ()=>{
    color.style.backgroundColor = colorPicker.value
})