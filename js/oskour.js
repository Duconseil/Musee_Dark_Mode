// Références aux éléments
let toggleButton = document.querySelector("#toggleMode");
let monFooter = document.querySelector("footer");
let monHeader = document.querySelector("header");
let tabLien = document.querySelectorAll("a");
let isNightMode = false; // Variable pour suivre l'état du mode

// Fonction pour changer la couleur de fond et de texte du header et du footer
function setBackgroundAndTextColor(element, isNightMode) {
    if (isNightMode) {
        element.style.backgroundColor = "black"; // Fond noir en mode sombre
        element.style.color = "white"; // Texte blanc en mode sombre
    } else {
        element.style.backgroundColor = "white"; // Fond blanc en mode clair
        element.style.color = "black"; // Texte noir en mode clair
    }
}

// Fonction pour réinitialiser les couleurs du body
function resetBodyColors(isNightMode) {
    if (isNightMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; // Assurez-vous que le texte soit visible en mode sombre
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; // Assurez-vous que le texte soit visible en mode clair
    }
}

// Fonction pour appliquer la couleur des liens
function setLinkColor(isNightMode) {
    tabLien.forEach(link => {
        if (isNightMode) {
            link.style.color = "white"; // Lien blanc en mode sombre
        } else {
            link.style.color = "black"; // Lien noir en mode clair
        }
    });
}

// Fonction pour appliquer la couleur du texte dans le footer
function setFooterTextColor(isNightMode) {
    // Assurez-vous que le texte non-lien dans le footer soit aussi visible
    let footerText = monFooter.querySelectorAll("*:not(a)");
    footerText.forEach(element => {
        if (isNightMode) {
            element.style.color = "white"; // Texte blanc dans le footer en mode sombre
        } else {
            element.style.color = "black"; // Texte noir dans le footer en mode clair
        }
    });
}

// Fonction pour inverser une couleur (RGB ou hexadécimale)
function invertColor(color) {
    let rgb;

    // Vérifier si la couleur est en format hexadécimal
    if (color.startsWith("#")) {
        rgb = hexToRgb(color);
    } else if (color.startsWith("rgb")) {
        // Convertir la couleur RGB en tableau de valeurs
        rgb = color.match(/\d+/g).map(Number);
    } else {
        return color; // Si le format est inconnu, retourner la couleur telle quelle
    }

    // Inverser chaque composant RGB
    let r = 255 - rgb[0];
    let g = 255 - rgb[1];
    let b = 255 - rgb[2];

    // Retourner la couleur inversée en format RGB
    return `rgb(${r}, ${g}, ${b})`; // Correction ici
}

// Convertir une couleur hexadécimale en RGB
function hexToRgb(hex) {
    // Supprimer le # si présent
    hex = hex.replace("#", "");

    // Diviser en composants
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return [r, g, b];
}

// Fonction pour basculer entre le mode clair et sombre
function toggleNightMode() {
    // Appliquer les couleurs du body
    resetBodyColors(isNightMode);

    // Appliquer les couleurs du header et footer
    setBackgroundAndTextColor(monHeader, isNightMode);
    setBackgroundAndTextColor(monFooter, isNightMode);

    // Appliquer la couleur des liens
    setLinkColor(isNightMode);

    // Appliquer la couleur du texte dans le footer
    setFooterTextColor(isNightMode);

    // Basculer l'état du mode
    isNightMode = !isNightMode;
}

// Ajouter un événement pour le bouton
toggleButton.addEventListener("click", toggleNightMode);
