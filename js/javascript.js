function printResults() {
    const progolMatches = 14;
    const revanchaMatches = 7;
    printTitle('Progol');
    printResult(progolMatches);
    printTitle('Revancha');
    printResult(revanchaMatches);
}

function printTitle(titleStr) {
    document.getElementById('progol').innerHTML += '<h1>' + titleStr + '</h1>';
}

function printResult(matches) {
    for (let i = 0; i < matches; i++) {
        let res = castIntToResult(i, getRandomInt());
        document.getElementById('progol').innerHTML += res;
    }
}

function castIntToResult(index, number) {
    if(number === 1) {
        return '<p>' + (index + 1) + '.- Local</p>';
    } else if(number === 2) {
        return '<p>' + (index + 1) + '.- Empate</p>';
    } else {
        return '<p>' + (index + 1) + '.- Visitante</p>';
    }
}

function getRandomInt() {
    const min = 1;
    const max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}