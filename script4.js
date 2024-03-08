
 let punti = localStorage.getItem('punti');

 document.getElementById('punti').innerText = `Punti: ${punti}`;

 document.getElementById('myForm').addEventListener('submit', function(event) {
  
     event.preventDefault();

     let nomeUtente = document.getElementById('nomeUtente').value;
     let classifica = JSON.parse(localStorage.getItem('classifiche')) || [];

     classifica.push({
         nomeUtente: nomeUtente,
         punti: punti
     });
     localStorage.setItem('classifiche', JSON.stringify(classifica));

     window.location.href = 'indexclassif.html';
 });