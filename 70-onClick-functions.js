// Hide button after click 
<button onclick="hideBtn(this)">Click Me to Hide</button>
function hideBtn(x) {
    x.style.display = 'none'
}
// remove all Class 
function rmvClass() {
    let allElements = document.querySelectorAll('.text');
    for (i = 0; allElements.length; i++) {
        {
            allElements[i].classList.remove('text');
        }
    }

}
