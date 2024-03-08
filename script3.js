let classifica = JSON.parse(localStorage.getItem('classifiche')) || [];

    classifica.sort((a, b) => b.punti - a.punti);

    classifica.forEach((utente, index) => {
        let classificaItem = document.createElement('tr');
        classificaItem.className = 'classifica-item';

        let posizioneColonna = document.createElement('td');
        posizioneColonna.textContent = index + 1;

        let nomeUtenteColonna = document.createElement('td');
        nomeUtenteColonna.textContent = utente.nomeUtente;

        let puntiColonna = document.createElement('td');
        puntiColonna.textContent = utente.punti;

        classificaItem.appendChild(posizioneColonna);
        classificaItem.appendChild(nomeUtenteColonna);
        classificaItem.appendChild(puntiColonna);

        document.getElementById('classifica-body').appendChild(classificaItem);
    });