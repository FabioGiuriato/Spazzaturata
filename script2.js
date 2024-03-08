const col = parseFloat(new URL(window.location.href).searchParams.get("colonne"));
let primoTocco = undefined;
document.getElementById("contenitore").style.gridTemplateColumns = "repeat(" + col + ", 1fr)";

let numeri = [1, 2, 3, 5, 8];

//array senza alcui elementi per quando vengono generati nuovi numeri
let secco = [2, 3, 5];
let carta = [1, 3, 5];
let plastica = [1, 2, 5];
let vetro = [1, 2, 3];

let errori = 0;
let seccoPunti = 0;
let cartaPunti = 0;
let plasticaPunti = 0;
let vetroPunti = 0;

let punti = 0;

let grandezzaMatrice = col * col;
let array = [];

//per lo spostamnet
let spostamento = undefined;
//creazione array
for (let i = 0; i < grandezzaMatrice; i++) {
    let index = Math.floor(Math.random() * 4.2);
    array.push(numeri[index]);
}
let ricicloP = 0;

let cambiamento = 0;

function revision() {
    let destra = 0;
    let altoD = 0;
    let bassoD = 0;
    let arrayAlto = [];
    let arrayBasso = [];
    let posizioneD = 0;
    let sommeD = [];
    let basso = 0;
    let sinistraB = 0;
    let destraB = 0;
    let arrayDestrs = [];
    let arraySinistra = [];
    let posizioneB = 0;
    let sommeB = [];
    let v = undefined;

    for (let i = 0; i < col; i++) {
        // controllo a destra
        for (let j = 0; j < col; j = j + 1 + destra) {
            destra = 0;
            arrayAlto = [];
            arrayBasso = [];
            altoD = 0;
            bassoD = 0;
            posizioneD = 0;
            sommeD = [];
            for (let count = 0; count < col - j - 1; count++) {
                if (matrice[i][j] == matrice[i][j + count + 1]) {
                    destra++;
                } else {
                    count = col
                }
            }
            for (let best = 0; best < destra + 1; best++) {
                altoD = 0;
                bassoD = 0;
                //altoD
                for (let c = 0; c < i; c++) {
                    if (matrice[i][j + best] == matrice[i - c - 1][j + best]) {
                        altoD++;
                    } else {
                        c = i
                    }
                }
                arrayAlto.push(altoD);
                //bassoD
                for (let c = 0; c < col - i - 1; c++) {
                    if (matrice[i][j + best] == matrice[i + c + 1][j + best]) {
                        bassoD++;
                    } else {
                        c = col
                    }
                }
                arrayBasso.push(bassoD);
            }
            for (let f = 0; f < arrayBasso.length; f++) {
                let sommaD = arrayAlto[f] + arrayBasso[f];
                sommeD.push(sommaD);
            }
            posizioneD = sommeD.indexOf(Math.max(...sommeD));
            if (destra == 4) {
                if (sommeD[posizioneD] == 3) {
                    if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                        let combinazione = 5;
                        v = 1;
                        let combinazion = 3;
                        comboOrizzontale(i, j, combinazione, v);
                        comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                        cambiamento++;
                        setTimeout(revision, 600);
                    }
                } else if (sommeD[posizioneD] == 2) {
                    if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                        let combinazione = 5;
                        v = 1;
                        let combinazion = 2;
                        comboOrizzontale(i, j, combinazione, v);
                        comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                        cambiamento++;
                        setTimeout(revision, 600);
                    }
                } else if (sommeD[posizioneD] == 0 || sommeD[posizioneD] == 1) {
                    if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                        let combinazione = 5
                        comboOrizzontale(i, j, combinazione);
                        cambiamento++;
                        setTimeout(revision, 600);
                    }
                }
            } else if (destra == 2 && sommeD[posizioneD] == 4) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 3;
                    let combinazion = 4;
                    comboOrizzontale(i, j, combinazione);
                    comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (sommeD[posizioneD] == 2 && destra == 2) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 3;
                    let combinazion = 2;
                    comboOrizzontale(i, j, combinazione);
                    comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (destra == 3 && sommeD[posizioneD] == 2) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 4;
                    v = 1;
                    let combinazion = 2;
                    comboOrizzontale(i, j, combinazione, v);
                    comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (destra == 2 && sommeD[posizioneD] == 3) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 3;
                    let combinazion = 3;
                    comboOrizzontale(i, j, combinazione);
                    comboVerticale5(i - arrayAlto[posizioneD], j + posizioneD, combinazion);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (destra == 3 && sommeD[posizioneD] == 0 || destra == 3 && sommeD[posizioneD] == 1) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 4
                    comboOrizzontale(i, j, combinazione);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (destra == 2 && sommeD[posizioneD] == 1 || destra == 2 && sommeD[posizioneD] == 0) {
                if (matrice[i][j] != 6 && matrice[i][j] != 7 && matrice[i][j] != 8) {
                    let combinazione = 3;
                    comboOrizzontale(i, j, combinazione);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            }
        }
        //controllo in basso
        for (let j = 0; j < col; j = j + 1 + basso) {
            basso = 0;
            sinistraB = 0;
            destraB = 0;
            arrayDestrs = [];
            arraySinistra = [];
            posizioneB = 0;
            sommeB = [];
            for (let count = 0; count < col - j - 1; count++) {
                if (matrice[j][i] == matrice[j + count + 1][i]) {
                    basso++;
                } else {
                    count = col
                }
            }
            for (let best = 0; best < basso + 1; best++) {
                destraB = 0;
                sinistraB = 0;
                //destraB
                for (let c = 0; c < col - i - 1; c++) {
                    if (matrice[j + best][i] == matrice[j + best][i + c + 1]) {
                        destraB++;
                    } else {
                        c = col
                    }
                }
                arrayDestrs.push(destraB);
                //sinistraB
                for (let c = 0; c < i; c++) {
                    if (matrice[j + best][i] == matrice[j + best][i - c - 1]) {
                        sinistraB++;
                    } else {
                        c = i
                    }
                }
                arraySinistra.push(sinistraB);
            }
            for (let f = 0; f < arraySinistra.length; f++) {
                let sommaB = arrayDestrs[f] + arraySinistra[f];
                sommeB.push(sommaB);
            }
            posizioneB = sommeB.indexOf(Math.max(...sommeB));
            if (basso == 4) {
                if (sommeB[posizioneB] == 1 || sommeB[posizioneB] == 0) {
                    if (matrice[j][i] != 6 && matrice[j][i] != 7 && matrice[j][i] != 8) {
                        let combinazione = 5;
                        comboVerticale(j, i, combinazione);
                        cambiamento++;
                        setTimeout(revision, 600);
                    }
                }
            } else if (sommeB[posizioneB] == 1 && basso == 3 || sommeB[posizioneB] == 0 && basso == 3) {
                if (matrice[j][i] != 6 && matrice[j][i] != 7 && matrice[j][i] != 8) {
                    let combinazione = 4;
                    comboVerticale(j, i, combinazione);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            } else if (basso == 2 && sommeB[posizioneB] == 1 || basso == 2 && sommeB[posizioneB] == 0) {
                if (matrice[j][i] != 6 && matrice[j][i] != 7 && matrice[j][i] != 8) {
                    let combinazione = 3;
                    comboVerticale(j, i, combinazione);
                    cambiamento++;
                    setTimeout(revision, 600);
                }
            }
        }
    }

}
function comboOrizzontale(y, x, comb, controllo, riciclo) {
    if (matrice[y][x] == 8 && riciclo == 1) {

    } else {
        setTimeout(function () {
            if (matrice[y][x] == 1) {
                seccoPunti += comb;
                punti += 1 * comb;
                seccoPunti = Math.min(seccoPunti, 50);
                document.getElementById("secco").innerHTML = "";
                document.getElementById("secco").innerHTML = "secco: " + seccoPunti + "/50";
            } else if (matrice[y][x] == 2) {
                cartaPunti += comb;
                punti += 2 * comb;
                cartaPunti = Math.min(cartaPunti, 50);
                document.getElementById("carta").innerHTML = "";
                document.getElementById("carta").innerHTML = "carta: " + cartaPunti + "/50";
            } else if (matrice[y][x] == 3) {
                plasticaPunti += comb;
                punti += 3 * comb;
                plasticaPunti = Math.min(plasticaPunti, 50);
                document.getElementById("plastica").innerHTML = "";
                document.getElementById("plastica").innerHTML = "plastica: " + plasticaPunti + "/50";
            } else if (matrice[y][x] == 5) {
                punti += 5 * comb;
                vetroPunti += comb;
                vetroPunti = Math.min(vetroPunti, 50);
                document.getElementById("vetro").innerHTML = "";
                document.getElementById("vetro").innerHTML = "vetro: " + vetroPunti + "/50";
            }
            //vede se fa la quartina per la quartina o per la sestina
            if (controllo != 1) {
                if (comb == 4 || comb == 5) {
                    for (let i = 0; i < y; i++) {
                        for (let j = 0; j < comb - 1; j++) {
                            matrice[y - i][x + j] = matrice[y - i - 1][x + j];
                        }
                    }
                    matrice[y][x + comb - 1] = comb + 2;
                    comb--;
                } else {
                    for (let i = 0; i < y; i++) {
                        for (let j = 0; j < comb; j++) {
                            matrice[y - i][x + j] = matrice[y - i - 1][x + j];
                        }
                    }
                }
            } else {
                for (let i = 0; i < y; i++) {
                    for (let j = 0; j < comb; j++) {
                        matrice[y - i][x + j] = matrice[y - i - 1][x + j];
                    }
                }
            }
            function controlloNumeriOrr() {
                for (let i = 0; i < comb; i++) {
                    if (matrice[0][x + i] == matrice[0][x + i - 1] || matrice[0][x + i] == matrice[1][x + i]) {
                        let casuale = Math.floor(Math.random() * 4.2);
                        matrice[0][x + i] = numeri[casuale];
                        controlloNumeriOrr();
                    }
                }
            }
            controlloNumeriOrr();
            document.getElementById("contenitore").innerHTML = "";
            immaginiLPostoDiNumeri(matrice);
            document.getElementById("punteggio").innerHTML = "";
            document.getElementById("punteggio").innerHTML = "punti: " + punti;
        }, 500);
    }
}
function comboVerticale(y, x, comb) {
    setTimeout(function () {
        if (matrice[y][x] == 1) {
            seccoPunti += comb;
            punti += 1 * comb;
            seccoPunti = Math.min(seccoPunti, 50);
            document.getElementById("secco").innerHTML = "";
            document.getElementById("secco").innerHTML = "secco: " + seccoPunti + "/50";
        } else if (matrice[y][x] == 2) {
            cartaPunti += comb;
            punti += 2 * comb;
            cartaPunti = Math.min(cartaPunti, 50);
            document.getElementById("carta").innerHTML = "";
            document.getElementById("carta").innerHTML = "carta: " + cartaPunti + "/50";
        } else if (matrice[y][x] == 3) {
            plasticaPunti += comb;
            punti += 3 * comb;
            plasticaPunti = Math.min(plasticaPunti, 50);
            document.getElementById("plastica").innerHTML = "";
            document.getElementById("plastica").innerHTML = "plastica: " + plasticaPunti + "/50";
        } else if (matrice[y][x] == 5) {
            punti += 5 * comb;
            vetroPunti += comb;
            vetroPunti = Math.min(vetroPunti, 50);
            document.getElementById("vetro").innerHTML = "";
            document.getElementById("vetro").innerHTML = "vetro: " + vetroPunti + "/50";
        }
        //spawn potere
        if (comb == 4 || comb == 5) {
            matrice[y + comb - 1][x] = comb + 2;
            comb--;
        }
        for (let i = 0; i < y; i++) {
            matrice[y + comb - 1 - i][x] = matrice[y - i - 1][x]
            document.getElementById("contenitore").innerHTML = "";
            immaginiLPostoDiNumeri(matrice);
        }
        //spawn numeri in  alto
        for (let i = 0; i < comb; i++) {
            let casuale = Math.floor(Math.random() * 4.2);
            matrice[i][x] = numeri[casuale];
        }
        function controlloNumeriVert() {
            for (let i = 0; i < comb; i++) {
                if (i >= 1) {
                    if (matrice[i][x] == matrice[i][x - 1] || matrice[i][x] == matrice[i][x + 1] || matrice[i][x] == matrice[i - 1][x]) {
                        let casuale = Math.floor(Math.random() * 4.2);
                        matrice[i][x] = numeri[casuale];
                        controlloNumeriVert();
                    }
                } else {
                    if (matrice[i][x] == matrice[i][x - 1] || matrice[i][x] == matrice[i][x + 1]) {
                        let casuale = Math.floor(Math.random() * 4.2);
                        matrice[i][x] = numeri[casuale];
                        controlloNumeriVert();
                    }
                }
            }
        }
        controlloNumeriVert();
        document.getElementById("contenitore").innerHTML = "";
        immaginiLPostoDiNumeri(matrice);
        document.getElementById("punteggio").innerHTML = "";
        document.getElementById("punteggio").innerHTML = "punti: " + punti;
        if (seccoPunti == 50 && cartaPunti == 50 && plasticaPunti == 50 && vetroPunti == 50) {
            localStorage.setItem('punti', punti);
            window.location.href = "indexvitt.html";
        }
    }, 500);
}
function comboVerticale5(y, x, comb) {
    setTimeout(function () {
        if (matrice[y + 1][x] == 1) {
            seccoPunti += comb;
            punti += 1 * comb;
            seccoPunti = Math.min(seccoPunti, 50);
            document.getElementById("secco").innerHTML = "";
            document.getElementById("secco").innerHTML = "secco: " + seccoPunti + "/50";
        } else if (matrice[y + 1][x] == 2) {
            cartaPunti += comb;
            punti += 2 * comb;
            cartaPunti = Math.min(cartaPunti, 50);
            document.getElementById("carta").innerHTML = "";
            document.getElementById("carta").innerHTML = "carta: " + cartaPunti + "/50";
        } else if (matrice[y + 1][x] == 3) {
            plasticaPunti += comb;
            punti += 3 * comb;
            plasticaPunti = Math.min(plasticaPunti, 50);
            document.getElementById("plastica").innerHTML = "";
            document.getElementById("plastica").innerHTML = "plastica: " + plasticaPunti + "/50";
        } else if (matrice[y + 1][x] == 5) {
            punti += 5 * comb;
            vetroPunti += comb;
            vetroPunti = Math.min(vetroPunti, 50);
            document.getElementById("vetro").innerHTML = "";
            document.getElementById("vetro").innerHTML = "vetro: " + vetroPunti + "/50";
        }
        for (let i = 0; i < y + 1; i++) {
            matrice[y + comb - i - 1][x] = matrice[y - i][x]
        }
        matrice[y + comb][x] = 7;
        //genero numeri
        for (let i = 0; i < comb; i++) {
            let casuale = Math.floor(Math.random() * 4.2);
            matrice[i][x] = numeri[casuale];
        }
        //controllo che non faccino tris
        function controlloNumeriVert5() {
            for (let i = 0; i < comb; i++) {
                if (i >= 1) {
                    if (matrice[i][x] == matrice[i][x - 1] || matrice[i][x] == matrice[i][x + 1] || matrice[i][x] == matrice[i - 1][x]) {
                        let casuale = Math.floor(Math.random() * 4.2);
                        matrice[i][x] = numeri[casuale];
                        controlloNumeriVert5();
                    }
                } else {
                    if (matrice[i][x] == matrice[i][x - 1] || matrice[i][x] == matrice[i][x + 1]) {
                        let casuale = Math.floor(Math.random() * 4.2);
                        matrice[i][x] = numeri[casuale];
                        controlloNumeriVert5();
                    }
                }
            }
        }
        controlloNumeriVert5();
        document.getElementById("contenitore").innerHTML = "";
        immaginiLPostoDiNumeri(matrice);
        document.getElementById("punteggio").innerHTML = "";
        document.getElementById("punteggio").innerHTML = "punti: " + punti;

    }, 500);
}
let numeroImmagineAssociazione = {
    1: 'secco.png',
    2: 'carta.png',
    3: 'plastica.png',
    5: 'bottigliavetrosa.webp',
    6: 'potereDelRiciclo.png',
    7: 'potereDellaNatura.jpeg',
    8: 'radioattivo.png'
};
function immaginiLPostoDiNumeri(matrice) {
    let container = document.getElementById("contenitore");
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < col; j++) {
            let card = document.createElement('div');
            let img = document.createElement('img');
            img.src = numeroImmagineAssociazione[matrice[i][j]];
            img.alt = 'Immagine ' + matrice[i][j];
            //img.id = "img" + i + j;
            if (col == 5) {
                img.classList.add("card5");
            } else if (col == 6) {
                img.classList.add("card6");
            } else if (col == 7) {
                img.classList.add("card7");
            }
            card.appendChild(img);
            container.appendChild(card);
            //switch
            card.addEventListener('click', () => {
                let i_tocco = i;
                let j_tocco = j;
                if (primoTocco === undefined) {
                    primoTocco = {
                        row: i_tocco,
                        col: j_tocco,
                        value: matrice[i_tocco][j_tocco]
                    };
                    /*let cane = document.getElementById("img" +i+j);
                    cane.innerHTML = "style='filter: brightness(2)'"*/
                    if (primoTocco.value == 8) {
                        errori++;
                        primoTocco = undefined;
                        document.getElementById("sbagli").innerHTML = "";
                        document.getElementById("sbagli").innerHTML = "errori: " + errori;
                        if (errori == 3) {
                            //alert("hai perso");
                            window.location.href = "indexscnf.html";
                        }
                    } else if (primoTocco.value == 6) {
                        ricicloP = 1;
                        if (primoTocco.row == 0) {
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col, 1, 0, ricicloP);
                        } else if (primoTocco.row == col - 1) {
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1, 0, ricicloP);
                        } else {
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col, 1, 0, ricicloP);
                        }
                        document.getElementById("contenitore").innerHTML = "";
                        immaginiLPostoDiNumeri(matrice);
                        primoTocco = undefined;
                        ricicloP = 0;
                        setTimeout(revision, 750);
                    } else if (primoTocco.value == 7) {
                        if (primoTocco.row == 0) {
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col + 1, 1);
                        } else if (primoTocco.row == col - 1) {
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col + 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1);
                        } else {
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row - 1, primoTocco.col + 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col + 1, 1);
                            comboOrizzontale(primoTocco.row, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col - 1, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col, 1);
                            comboOrizzontale(primoTocco.row + 1, primoTocco.col + 1, 1);
                        }
                        document.getElementById("contenitore").innerHTML = "";
                        immaginiLPostoDiNumeri(matrice);
                        primoTocco = undefined;
                        setTimeout(revision, 750);
                    }
                } else {
                    cambiamento = 0;
                    let secondoTocco = {
                        row: i_tocco,
                        col: j_tocco,
                        value: matrice[i_tocco][j_tocco]
                    };
                    if (secondoTocco.value == 8) {
                        primoTocco = undefined;
                        secondoTocco = undefined;
                    } else if (secondoTocco.value == 6) {
                        ricicloP = 1;
                        if (secondoTocco.row == 0) {
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col, 1, 0, ricicloP);
                        } else if (secondoTocco.row == col - 1) {
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1, 0, ricicloP);
                        } else {
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1, 0, ricicloP);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col, 1, 0, ricicloP);
                        }
                        document.getElementById("contenitore").innerHTML = "";
                        immaginiLPostoDiNumeri(matrice);
                        secondoTocco = undefined;
                        primoTocco = undefined;
                        ricicloP = 0;
                        setTimeout(revision, 750);
                    } else if (secondoTocco.value == 7) {
                        if (secondoTocco.row == 0) {
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col + 1, 1);
                        } else if (secondoTocco.row == col - 1) {
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col + 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1);
                        } else {
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row - 1, secondoTocco.col + 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col + 1, 1);
                            comboOrizzontale(secondoTocco.row, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col - 1, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col, 1);
                            comboOrizzontale(secondoTocco.row + 1, secondoTocco.col + 1, 1);
                        }
                        document.getElementById("contenitore").innerHTML = "";
                        immaginiLPostoDiNumeri(matrice);
                        primoTocco = undefined;
                        secondoTocco = undefined;
                        setTimeout(revision, 750);

                    } else if (Math.abs(primoTocco.row - secondoTocco.row) + Math.abs(primoTocco.col - secondoTocco.col) === 1) {
                        let tempValue = matrice[primoTocco.row][primoTocco.col];
                        matrice[primoTocco.row][primoTocco.col] = matrice[secondoTocco.row][secondoTocco.col];
                        matrice[secondoTocco.row][secondoTocco.col] = tempValue;
                        if (primoTocco.row == secondoTocco.row - 1 || primoTocco.col == secondoTocco.col - 1 || primoTocco.row == secondoTocco.row + 1 || primoTocco.col == secondoTocco.col + 1) {
                            spostamento = "definito"
                        }
                    }
                    if (spostamento == undefined) {
                        errori++;
                        document.getElementById("sbagli").innerHTML = "";
                        document.getElementById("sbagli").innerHTML = "errori: " + errori;
                        if (errori == 3) {
                            //alert("hai perso");
                            window.location.href = "indexscnf.html";
                        }
                    } else {
                        revision();
                        if (cambiamento == 0) {
                            errori++;
                            document.getElementById("sbagli").innerHTML = "";
                            document.getElementById("sbagli").innerHTML = "errori: " + errori;
                            let vert = primoTocco.row;
                            let oriz = primoTocco.col;
                            let vert2 = secondoTocco.row;
                            let oriz2 = secondoTocco.col;
                            setTimeout(function () {
                                scambio(vert, oriz, vert2, oriz2);
                            }, 500);
                            function scambio(r, c, r2, c2) {
                                let temp = matrice[r][c];
                                matrice[r][c] = matrice[r2][c2];
                                matrice[r2][c2] = temp;
                                document.getElementById("contenitore").innerHTML = "";
                                immaginiLPostoDiNumeri(matrice);
                            }

                        } else {
                            errori = 0;
                            document.getElementById("sbagli").innerHTML = "";
                            document.getElementById("sbagli").innerHTML = "errori: " + errori;
                        }
                    } 
                    if (errori == 3) {
                        window.location.href = "indexscnf.html";
                    }
                    primoTocco = undefined;
                    spostamento = undefined;
                    function fraseCasuale() {
                        let indice = Math.floor(Math.random() * frasi.length);
                        let frase = frasi[indice];
                        frasi.splice(indice, 1);
                        return frase;
                    }
                    let frasi = [
                        "Spazzaturastico!",
                        "Incredibile!",
                        "No ai rifiuti!",
                        "Nutrialistico",
                        "A caccia di rifiuti!"
                    ];


                    function mostraElemento() {
                        if (((seccoPunti > 10 && seccoPunti < 13) || (cartaPunti > 20 && cartaPunti < 23) || (plasticaPunti > 30 && plasticaPunti < 33) || (vetroPunti > 40 && vetro < 43) && punti % 2 === 0)) {
                            let elemento = document.querySelector('.elementoAnimato');
                            elemento.style.display = 'block';
                            elemento.style.animation = 'slide-in 5s forwards';

                            elemento.querySelector('p').textContent = fraseCasuale();

                            setTimeout(function () {
                                elemento.style.display = 'none';
                            }, 6000);
                        }
                    }
                    mostraElemento("seccoPunti", seccoPunti);
                    mostraElemento("vetroPunti", vetroPunti);
                    mostraElemento("cartaPunti", cartaPunti);
                    mostraElemento("plasticaPunti", plasticaPunti);

                }
                document.getElementById("contenitore").innerHTML = "";
                immaginiLPostoDiNumeri(matrice);
            });
        }
    }
}

let matrice = [];
for (let i = 0; i < col; i++) {
    matrice.push(array.slice(i * col, (i + 1) * col));
}
//cooregge eventuali tris gia presenti allo spwan
function correggiSpawn() {
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < col - 2; j++) {
            let casuale = Math.floor(Math.random() * 3)
            if (matrice[i][j] == matrice[i][j + 1] && matrice[i][j] == matrice[i][j + 2]) {
                if (matrice[i][j + 2] == 1) {
                    matrice[i][j + 2] = secco[casuale];
                    correggiSpawn();
                } else if (matrice[i][j + 2] == 2) {
                    matrice[i][j + 2] = carta[casuale];
                    correggiSpawn();
                } else if (matrice[i][j + 2] == 3) {
                    matrice[i][j + 2] = plastica[casuale];
                    correggiSpawn();
                } else if (matrice[i][j + 2] == 5) {
                    matrice[i][j + 2] = vetro[casuale];
                    correggiSpawn();
                }
            }
            if (matrice[j][i] == matrice[j + 1][i] && matrice[j][i] == matrice[j + 2][i]) {
                if (matrice[j + 2][i] == 1) {
                    matrice[j + 2][i] = secco[casuale];
                    correggiSpawn();
                } else if (matrice[j + 2][i] == 2) {
                    matrice[j + 2][i] = carta[casuale];
                    correggiSpawn();
                } else if (matrice[j + 2][i] == 3) {
                    matrice[j + 2][i] = plastica[casuale];
                    correggiSpawn();
                } else if (matrice[j + 2][i] == 5) {
                    matrice[j + 2][i] = vetro[casuale];
                    correggiSpawn();
                }
            }
        }
    }
}
function aggiornaProgressBar() {
    let plasticaBar = document.getElementById('plastica-bar');
    let cartaBar = document.getElementById('carta-bar');
    let seccoBar = document.getElementById('secco-bar');
    let vetroBar = document.getElementById('vetro-bar');

    if (plasticaPunti > 0 && plasticaBar) {
        plasticaBar.style.width = `${(plasticaPunti / 50) * 100}%`;
    }

    if (cartaPunti > 0 && cartaBar) {
        cartaBar.style.width = `${(cartaPunti / 50) * 100}%`;
    }

    if (seccoPunti > 0 && seccoBar) {
        seccoBar.style.width = `${(seccoPunti / 50) * 100}%`;
    }

    if (vetroPunti > 0 && vetroBar) {
        vetroBar.style.width = `${(vetroPunti / 50) * 100}%`;
    }
}


setInterval(aggiornaProgressBar, 3000);
correggiSpawn();
immaginiLPostoDiNumeri(matrice);