// Test lásky
const laska = (id) => {
    var percenta = Math.floor(Math.random() * 101);

    document.getElementById(id).innerHTML = `Títo dvaja sa milujú na ${percenta}%!`;
}

// Veštica
const vestica = (id) => {
    var odpovede = ["Áno!", "Samozrejme!", "Určite áno!", "Nie!", "Tak to ani náhódou!", "Určite nie!", "Neviem..."];;
    var odpoved = odpovede[Math.floor(Math.random() * odpovede.length)];

    document.getElementById(id).innerHTML = odpoved;
}