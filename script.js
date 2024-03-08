window.onload = startLoadingAnimation();

let frcas = Math.floor(Math.random() * 4);

function startLoadingAnimation() {
  document.body.style.backgroundColor =  'rgb(74, 100, 120)';


  const progressBar = document.getElementById('loading-bar');
  const progressText = document.getElementById('loading-progress');
  const loadingImage = document.getElementById('loading-image');
  const phrasesContainer = document.getElementById('random-phrases-container');

  progressBar.style.width = '0%';

  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    progressBar.style.width = `${progress}%`;
    progressText.innerText = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);

      loadingImage.style.display = 'block';
      const phrases = ["Viva la natura", "Salviamo il pianeta", "Acciderbolina", "Nutriastico"];

      let phraseIndex = frcas;
      const phraseInterval = setInterval(() => {
        const currentPhrase = phrases[phraseIndex];
        phrasesContainer.innerText = currentPhrase;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }, 750);

      setTimeout(() => {
        loadingImage.style.display = 'none';
        document.getElementById('loading-container').style.display = 'none';
        document.getElementById('myForm').style.display = 'block';
        document.getElementById('contenitore').style.display = 'block';
        clearInterval(phraseInterval);

        document.body.style.backgroundImage = "url('background.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
      }, 1500);
    }
  }, 1);
}
var difficultySelected = false;
var difficulty;

document.getElementById("tabella_5*5").addEventListener("click", function () {
  difficulty = 'facile';
  document.getElementById("colonne").value = 5;
  difficultySelected = true;
});

document.getElementById("tabella_6*6").addEventListener("click", function () {
  difficulty = 'medio';
  document.getElementById("colonne").value = 6;
  difficultySelected = true;
});

document.getElementById("tabella_7*7").addEventListener("click", function () {
  difficulty = 'difficile';
  document.getElementById("colonne").value = 7;
  difficultySelected = true;
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  if (!difficultySelected) {
    event.preventDefault();
    alert("Per favore, seleziona una difficoltà.");
  }
});

const buttons = document.querySelectorAll('.animated-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });
    this.classList.add('selected');
  });
});
