// ref
let tabLien = document.querySelectorAll("a");
let bnt = document.querySelector("#toggleMode");
let monFooter = document.querySelector("footer");

// action
function monSwitch() {

    // on inverse la couleur d'arriere plan du footer
    if(monFooter.style.backgroundColor == "white")
        monFooter.style.backgroundColor = "black"
    else
        monFooter.style.backgroundColor = "white"
    
    // on passe tous les liens les passer en blanc
    // on va parcourir tous les liens et pour CHACUN d'eux je vais leur appliquer la couleur blanc
    for (let i = 0; i < tabLien.length; i = i + 1) {
        tabLien[i].style.color = rgbStringToHexString(tabLien[i]);
    }

}

function rgbStringToHexString(obj){

    // Convert red -> rgb(255, 0, 0)
    rgbSTRING = window.getComputedStyle(obj).color

    // Choose correct separator
    let sep = rgbSTRING.indexOf(",") > -1 ? "," : " ";

    // Turn "rgb(r,g,b)" into [r,g,b]
    let rgb = rgbSTRING.substr(4).split(")")[0].split(sep);

    // Swtich color (ex : 255 -> 0, ex: 0-> 255)
    let r = (255 - rgb[0]).toString(16)
    let g = (255 - rgb[1]).toString(16)
    let b = (255 - rgb[2]).toString(16)

    // Format color #......
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

// event
bnt.addEventListener('click', monSwitch);


// // const toggleButton = document.getElementById('toggleMode');
// const toggleButton = document.querySelector('#toggleMode');
// const main = document.querySelector('#main-header');

// toggleButton.addEventListener('click', () => {
//     const body = document.body;

//     if (body.classList.contains('light-mode')) {
//         body.classList.replace('light-mode', 'dark-mode');
//         toggleButton.textContent = 'Mode clair';
//     } else {
//         body.classList.add("dark");
//         // body.classList.replace('dark-mode', 'light-mode');
//         toggleButton.textContent = 'Mode sombre';
//     }
// });