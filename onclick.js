// Hide button after click 
<button onclick="hideBtn(this)">Click Me to Hide</button>
function hideBtn(x) {
    x.style.display = 'none'
}
// remove all Class 
function rmvClass() {
    let allElements = document.querySelectorAll('.text');
    for (i = 0; i < allElements.length; i++) {
        {
            allElements[i].classList.remove('text');
        }
    }

}
// date calculation
function calDate() {
    let d1 = document.getElementById('d1').value;
    let d2 = document.getElementById('d2').value;
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const time = Math.abs(date2 - date1);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    document.getElementById('output').innerHTML = days;

}
// select id with similar name 
function getElm() {
    var tags = document.querySelectorAll('*[id^="htc"]');
    for (i = 0; i < tags.length; i++) {
        tags.item(i).style.backgroundColor = 'red'
    }
}
