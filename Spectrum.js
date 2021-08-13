function ShowContent() {
    document.getElementById("nav-mobile-content").classList.toggle("n-m-show");
}
function redirect(newLocation) {
    window.location.replace(newLocation);
}
function setValue(id, val) {
    const elem = document.getElementById(id)
    elem.innerHTML = val
}
function getInput(id) {
    const inp = document.getElementById(id).value
    return(inp)
}