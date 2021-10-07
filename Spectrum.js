ShowContent = () => document.getElementById("nav-mobile-content").classList.toggle("n-m-show")
redirect = newLocation => window.location.replace(newLocation);
setValue = (id, val) => document.getElementById(id).innerHTML = val
getInput = id => document.getElementById(id).value
filterList = (arr, val) =>  {
    let newArr = []
    for (const item of arr) {
        if (item.toLowerCase().includes(val.toLowerCase())) {
            newArr.push(item)
        }
    }
    return (newArr)
}