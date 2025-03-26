const inputs = document.querySelectorAll(".controls input");
const imageSelector = document.getElementById("image-selector");
const image = document.getElementById("image");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate)); 
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate)); 

imageSelector.addEventListener("change", function() {
    image.src = this.value;
});